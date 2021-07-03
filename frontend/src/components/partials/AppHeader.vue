<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <router-link to="/">홈</router-link> |
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
