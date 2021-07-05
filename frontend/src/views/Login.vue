<template>
  <div>
    <login-form @submit="onSubmit" />
  </div>
</template>

<script>
import api from '@/api'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    onSubmit(payload) {
      const { email, password } = payload
      api
        .post('/api/login', {
          email,
          password
        })
        .then((res) => {
          const { data } = res
          if (data.result === 1) {
            console.log('프론트엔드 로그인 성공')
            console.log(data.sid)
            this.$router.push('/')
          }
          if (data.result === 0) {
            console.log('프론트엔드 로그인 실패')
            alert(data.errorMessage)
          }
        })
    }
  }
}
</script>

<style></style>
