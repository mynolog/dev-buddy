<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>{{ postInfo.title }}</h3>
        </div>
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center">
            <div>포스팅 번호 {{ postInfo.pid }}</div>
            <span>{{ postInfo.author }}</span> |
            <small v-if="!postInfo.isUpdated">{{
              postInfo.createdAt | moment('YYYY-MM-DD HH:mm')
            }}</small>
            <small v-else
              >{{
                postInfo.updatedAt | moment('YYYY-MM-DD HH:mm')
              }}
              (수정)</small
            >
            <p>
              <template
                class="contents"
                v-for="(content, index) in postInfo.contents"
              >
                {{ content }}
                <br :key="index" />
              </template>
            </p>
          </vs-col>
        </vs-row>
        <vs-row class="btn-container">
          <vs-button
            v-if="isAuthor"
            @click="editPost"
            color="warning"
            type="flat"
            >수정하기</vs-button
          >
          <vs-button
            v-if="isAuthor"
            @click="deletePost"
            color="danger"
            type="flat"
            >삭제하기</vs-button
          >
          <vs-button @click="toPostList" color="success" type="flat">
            목록보기
          </vs-button>
        </vs-row>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'PostDetail',
  data() {
    return {
      postInfo: {},
      id: this.$route.params.id
    }
  },
  methods: {
    notice() {
      this.$vs.notify({
        title: '기능 개발 알림',
        text: '수정하기, 삭제하기 기능 개발중입니다.',
        color: 'black'
      })
    },
    toPostList() {
      return this.$router.push('/posts')
    },
    deletePost() {
      const hasConfirmed = confirm(
        '⚠ 정말로 삭제하시겠습니까? \n 취소할 수 없는 작업입니다.'
      )
      if (!hasConfirmed) {
        this.$vs.notify({
          title: '포스팅 삭제 취소',
          text: '포스팅 삭제 취소했습니다.',
          color: 'warning'
        })
        return false
      } else {
        this.$axios
          .delete(`/api/posts/${this.id}`, { data: { pid: this.id } })
          .then(({ data }) => {
            if (data.result === 1) {
              this.$vs.notify({
                title: '포스팅 삭제 완료',
                text: data.message,
                color: 'success'
              })
              this.$router.push('/posts')
            }
          })
          .catch((err) => {
            this.$vs.notify({
              title: '포스팅 삭제 실패',
              text: '관리자에게 문의하세요.' || err,
              color: 'danger'
            })
          })
      }
    },
    editPost() {
      const {
        postInfo: { authId },
        userId
      } = this
      if (authId !== userId) {
        this.$vs.notify({
          title: '포스팅 수정 권한 없음',
          text: '포스팅 작성자만 수정할 수 있습니다.',
          color: 'danger'
        })
        this.$router.push(`/posts/${this.id}`)
        return false
      }
      this.$router.push(`/posts/${this.id}/edit`)
    },
    getPostById() {
      this.$axios
        .get(`/api/posts/${this.id}`)
        .then(({ data }) => {
          const { result, message, post } = data
          const postInfo = JSON.parse(post)
          const {
            pid,
            title,
            content,
            user_id,
            created_at,
            author,
            updated_at,
            is_updated,
            views
          } = postInfo
          const contents = content.split('\n')
          if (result === 1) {
            this.postInfo = {
              pid,
              title,
              contents,
              createdAt: created_at,
              updatedAt: updated_at,
              isUpdated: is_updated,
              authId: user_id,
              author,
              views
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
        .catch((err) => {
          this.$vs.notify({
            title: '포스팅 불러오기 실패',
            text: '관리자에게 문의하세요.' || err,
            color: 'danger'
          })
          this.$router.push('/posts')
        })
    }
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId
    },
    isAuthor() {
      return this.postInfo.authId === this.userId ? true : false
    }
  },
  mounted() {
    this.getPostById()
  }
}
</script>

<style></style>
