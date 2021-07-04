<template>
  <div>
    <signup-form @submit="onSubmit" />
  </div>
</template>

<script>
import api from '@/api'
import SignupForm from '@/components/SignupForm'
export default {
  name: 'Signup',
  components: {
    SignupForm
  },
  methods: {
    onSubmit(payload) {
      const { email, name, username, password } = payload
      api
        .post('/api/signup', {
          email,
          name,
          username,
          password
        })
        .then((res) => {
          // 회원가입 성공 시
          if (res.data.result === 1) {
            console.log('signup success from frontend')
            this.$router.push('/')
          }
          // 회원가입 실패 시
          if (res.data.result === 0) {
            console.log('something went wrong.. try again.')
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped lang="scss"></style>
