<template>
  <div class="home">
    <h1>DevBuddy</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h2 v-if="userName">{{ userName }}님 환영합니다 :)</h2>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName
    }
  }
}
</script>

<style lang="scss"></style>
