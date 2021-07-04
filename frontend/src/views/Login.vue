<template>
  <div>
    <login-form @submit="onSubmit" />
  </div>
</template>

<script>
// import api from '@/api'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    onSubmit(payload) {
      const { email, password } = payload
      console.log(email, password)
    }
  }
}
</script>

<style></style>
