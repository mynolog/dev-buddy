<template>
  <div class="home">
    <h1>DevBuddy</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2 v-if="userName">{{ userName }}님 환영합니다 :)</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    userName() {
      return this.$store.getters.getUserName
    }
  }
}
</script>

<style lang="scss"></style>
