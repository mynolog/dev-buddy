<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>대시보드</h3>
        </div>
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center">
            <vs-avatar color="#888" size="70px" :text="userLastName" />
            <h3>{{ userName }}</h3>
            <h3>{{ user.email }}</h3>
          </vs-col>
        </vs-row>
        <vs-button @click="submit" button="submit" color="primary" type="filled"
          >수정하기</vs-button
        >
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      loading: false
    }
  },

  computed: {
    userName() {
      return this.$store.getters.getUserName
    },
    userLastName() {
      return this.userName.toString().slice(0, 1)
    },
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    submit() {
      this.$vs.notify({
        title: '기능 개발 알림',
        text: '개인정보 수정하기 기능 개발중입니다.',
        color: 'black'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.vs-col {
  padding: 20px;
}
</style>
