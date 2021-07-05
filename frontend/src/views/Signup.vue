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
      const { email, name, password } = payload
      api
        .post('/api/signup', {
          email,
          name,
          password
        })
        .then((res) => {
          const { data } = res
          // 회원가입 성공 시
          if (data.result === 1) {
            alert(data.message)
            this.$router.push('/login')
          }
          // 회원가입 실패 시
          if (data.result === 0) {
            alert(data.message)
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped lang="scss"></style>
