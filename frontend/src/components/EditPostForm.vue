<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>스터디 모집 수정</h3>
        </div>
        <form method="POST" @submit.prevent="submit">
          <vs-input type="text" v-model="postInfo.title" placeholder="제목" />
          <div>
            <vs-textarea
              v-model="postInfo.contents"
              rows="6"
              placeholder="내용"
            ></vs-textarea>
          </div>
          <vs-button button="submit" color="primary" type="filled"
            >수정하기</vs-button
          >
        </form>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'EditPostForm',
  data() {
    return {
      postInfo: {}
    }
  },
  methods: {
    submit() {
      const {
        params: { id }
      } = this.$route
      const {
        postInfo: { title, contents, pid, authId }
      } = this
      if (!title || !contents) {
        this.$vs.notify({
          title: '포스팅 수정 실패',
          text: '제목과 내용을 모두 입력하세요.',
          color: 'danger'
        })
        return false
      }
      if (authId !== this.userId) {
        this.$vs.notify({
          title: '포스팅 수정 권한 없음',
          text: '포스팅 작성자만 수정할 수 있습니다.',
          color: 'danger'
        })
        return false
      }
      this.$axios
        .put(`/api/posts/${id}`, {
          title,
          content: contents,
          pid
        })
        .then(({ data }) => {
          if (data.result === 1) {
            this.$vs.notify({
              title: '포스팅 수정 완료',
              text: data.message,
              color: 'success'
            })
            this.$router.push(`/posts/${id}`)
          }
        })
        .catch((err) => {
          this.$vs.notify({
            title: '포스팅 실패',
            text: '관리자에게 문의하세요' || err,
            color: 'danger'
          })
        })
    },
    getPostById() {
      const {
        params: { id }
      } = this.$route
      this.$axios.get(`/api/posts/${id}`).then(({ data }) => {
        const { result, message, post } = data
        const postInfo = JSON.parse(post)
        const { pid, title, content, user_id, created_at } = postInfo
        const contents = content.split('\n')
        if (result === 1) {
          this.postInfo = {
            pid,
            title,
            contents,
            createdAt: created_at,
            authId: user_id
          }
        }
        if (result === 0) {
          this.$vs.notify({
            title: '404 에러',
            text: '존재하지 않는 페이지입니다.' || message,
            color: 'danger'
          })
          this.$router.push('/posts')
        }
      })
    }
  },
  created() {
    this.getPostById()
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId
    }
  }
}
</script>

<style lang="scss" scoped>
.vs-card {
  padding: 50px;
}
.vs-input {
  width: 100%;
  margin-bottom: 10px;
}
.vs-col {
  padding: 20px;
}
</style>
