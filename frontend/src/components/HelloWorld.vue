<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    getTitle() {
      this.$axios
        .get('/api')
        .then((res) => {
          this.title = res.data.title
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getTitle()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
