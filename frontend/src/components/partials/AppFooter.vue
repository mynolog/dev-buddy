<template>
  <footer class="app-footer">
    {{ currentYear }}
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: ''
    }
  },
  methods: {
    getCurrentYear() {
      this.currentYear = new Date().getFullYear()
    }
  },
  mounted() {
    this.getCurrentYear()
  }
}
</script>

<style scoped lang="scss"></style>
