<template>
  <div id="app">
    <app-header />
    <weather-info />
    <router-view class="view" />
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import AppHeader from '@/components/partials/AppHeader'
// import AppFooter from '@/components/partials/AppFooter'
import WeatherInfo from '@/components/WeatherInfo'

export default {
  name: 'App',
  components: {
    AppHeader,
    // AppFooter,
    WeatherInfo
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
  height: 94vh;
  padding: 50px 0;
}
</style>
