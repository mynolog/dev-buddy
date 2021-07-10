<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>{{ postInfo.title }}</h3>
        </div>
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center">
            <small>{{ postInfo.createdAt }}</small>
            <p>
              <template v-for="(content, index) in postInfo.contents">
                {{ content }}
                <br :key="index" />
              </template>
            </p>
          </vs-col>
        </vs-row>
        <vs-button @click="notice" color="success" type="flat"
          >수정하기</vs-button
        >
        <vs-button @click="notice" color="danger" type="flat"
          >삭제하기</vs-button
        >
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'PostDetail',
  data() {
    return {
      postInfo: {}
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
    getPostById() {
      const {
        params: { id }
      } = this.$route
      this.$axios.get(`/api/posts/${id}`).then(({ data }) => {
        const { result, message, post } = data
        const postInfo = JSON.parse(post)
        const { pid, title, content, created_at } = postInfo
        const contents = content.split('\n')
        if (result === 1) {
          this.postInfo = {
            pid,
            title,
            contents,
            createdAt: created_at
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
  mounted() {
    this.getPostById()
  }
}
</script>

<style></style>
