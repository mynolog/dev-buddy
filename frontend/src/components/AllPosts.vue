<template>
  <div class="post__table">
    <vs-table max-items="5" pagination :data="postList">
      <template slot="header">
        <h3>둘러보기</h3>
      </template>
      <template slot="thead">
        <vs-th>번호</vs-th>
        <vs-th>제목</vs-th>
        <vs-th>작성자</vs-th>
        <vs-th>작성일</vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].pid">
            {{ data[indextr].pid }}
          </vs-td>
          <vs-td :data="data[indextr].title">
            <router-link :to="`/posts/${data[indextr].pid}`">
              {{ data[indextr].title }}
            </router-link>
          </vs-td>
          <vs-td :data="data[indextr].name">
            {{ data[indextr].name }}
          </vs-td>
          <vs-td :data="data[indextr].cratedAt">
            <small>{{ data[indextr].createdAt }}</small>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  name: 'AllPosts',
  data: () => ({
    postList: [],
    loading: false
  }),
  methods: {
    getPosts() {
      this.loading = true
      this.$vs.loading()
      this.$axios
        .get('/api/posts/')
        .then((res) => {
          this.loading = false
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          const { data } = res
          this.postList = JSON.parse(data.postList)
        })
        .catch((err) => {
          this.loading = false
          this.$vs.loading.close()
          this.$vs.notify({
            title: '500 에러 발생',
            text: '관리자에게 문의하세요.',
            color: 'danger'
          })
          console.log(err)
        })
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style lang="scss" scoped>
.post__table {
  text-align: left;
}
</style>
