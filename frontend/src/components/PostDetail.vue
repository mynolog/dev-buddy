<template>
  <h1>포스트 보기</h1>
</template>

<script>
export default {
  name: 'PostDetail',
  methods: {
    getPostById() {
      const {
        params: { id }
      } = this.$route
      console.log(id)
      this.$axios.get('/api/posts/').then(({ data }) => {
        console.log(data)
      })
    }
  },
  mounted() {
    this.getPostById()
  }
}
</script>

<style></style>
