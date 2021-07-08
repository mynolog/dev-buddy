<template>
  <div>
    <h1>찾아보기</h1>
    <ul>
      <li v-for="(post, index) in postList" :key="index">
        <small>{{ post.pid }}</small>
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllPosts',
  data() {
    return {
      postList: []
    }
  },
  methods: {
    getPostById() {
      const {
        params: { id }
      } = this.$route
      console.log(id)
      this.$axios.get('/api/posts/').then(({ data }) => {
        this.postList = JSON.parse(data.postList)
      })
    }
  },
  mounted() {
    this.getPostById()
  }
}
</script>

<style lang="scss" scoped></style>
