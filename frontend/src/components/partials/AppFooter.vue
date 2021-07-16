<template>
  <footer class="app-footer">
    <div>{{ user.name }} All rights reserved. {{ currentYear }}</div>
    <ul>
      <li>
        <a :href="githubLink" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </li>
      <li>
        <a :href="mailTo">
          <i class="fas fa-at fa-2x"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: null,
      user: {
        name: 'Minho Lee',
        github: 'minholeelog',
        email: '91aiden.lee@gmail.com'
      }
    }
  },
  methods: {
    getCurrentYear() {
      this.currentYear = new Date().getFullYear()
    }
  },
  computed: {
    githubLink() {
      return `https://github.com/${this.user.github}`
    },
    mailTo() {
      return `mailto:${this.user.email}`
    }
  },
  mounted() {
    this.getCurrentYear()
  }
}
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
  }
  li {
    list-style: none;
  }
  li:not(:last-child) {
    margin-right: 15px;
  }
  a {
    color: inherit;
    opacity: 0.8;
  }
  a:hover {
    opacity: 1;
  }
}
</style>
