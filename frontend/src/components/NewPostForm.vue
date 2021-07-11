<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>스터디 모집</h3>
        </div>
        <form method="POST" @submit.prevent="submit">
          <vs-input type="text" v-model="title" placeholder="제목" />
          <div>
            <vs-textarea
              v-model="content"
              rows="6"
              placeholder="내용"
            ></vs-textarea>
          </div>
          <vs-button button="submit" color="primary" type="filled"
            >작성하기</vs-button
          >
        </form>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'NewPostForm',
  data() {
    return {
      title: '',
      content: '',
      userId: this.$store.getters.getUserId
    }
  },
  methods: {
    submit() {
      const { title, content, userId } = this
      if (!title || !content) {
        this.$vs.notify({
          title: '포스팅 실패',
          text: '제목과 내용을 모두 입력하세요.',
          color: 'danger'
        })
        return false
      }
      this.$axios
        .post(`/api/new-post`, { title, content, userId })
        .then(({ data }) => {
          this.loading = false
          this.$vs.loading.close()
          const { result, message, pid } = data
          if (result === 1) {
            // alert(message)
            this.$vs.notify({
              title: '포스팅 완료',
              text: message,
              color: 'success'
            })
            this.$router.push(`/posts/${pid}`)
          }
          if (result === 0) {
            // alert(message)
            this.$vs.notify({
              title: '포스팅 실패',
              text: message,
              color: 'danger'
            })
          }
        })
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
