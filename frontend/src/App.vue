<template>
  <div id="app">
    <app-header />
    <router-view class="view" />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/partials/AppHeader'
import AppFooter from '@/components/partials/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
#app {
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100%;
  text-decoration: none;
  list-style: none;
}
.view {
  width: 80%;
  margin: 0 auto;
  height: 94.5vh;
  padding: 70px 0;
}
</style>
