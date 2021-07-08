<template>
  <header>
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="navbar"
    >
      <div slot="title">
        <vs-navbar-title>
          <router-link to="/">DevBuddy</router-link>
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="1"> </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link v-if="!loggedIn" to="/signup">회원가입</router-link>
        <router-link v-else to="/dash-board">
          {{ userName }} 님 대시보드
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link v-if="!loggedIn" to="/login">로그인</router-link>
        <router-link v-else to="/" @click.native="logout">로그아웃</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link v-if="loggedIn" to="/new-post">스터디 모집</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <router-link v-if="loggedIn" to="/posts">둘러보기</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      colorx: '#1B57A6',
      indexActive: 0
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout')
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.getLoggedIn
    },
    userName() {
      return this.$store.getters.getUserName
    }
  }
}
</script>

<style scoped lang="scss">
div {
  a {
    color: #fff;
  }
}
</style>
