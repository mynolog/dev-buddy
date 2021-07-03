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
        <router-link to="/login">로그인</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/signup">회원가입</router-link>
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
