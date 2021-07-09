<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>{{ postObj.title }}</h3>
        </div>
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center">
            <p>{{ postObj.content }}</p>
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
      postObj: {}
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
        if (result === 1) {
          this.postObj = JSON.parse(post)
        }
        if (result === 0) {
          alert(message)
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
