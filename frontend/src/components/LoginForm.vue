<template>
  <div class="login-form">
    <h2>로그인</h2>
    <div class="login-form__container">
      <form method="POST" @submit.prevent="submit">
        <vs-input type="email" v-model="email" placeholder="이메일" required />
        <vs-input
          type="password"
          placeholder="비밀번호"
          v-model="password"
          required
        />
        <vs-button button="submit" color="primary" type="filled"
          >로그인</vs-button
        >
      </form>
      <router-link to="/signup">아직 계정이 없나요? &rarr;</router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      token: ''
    }
  },
  methods: {
    submit() {
      const { email, password } = this
      api
        .post('/api/login', {
          email,
          password
        })
        .then((res) => {
          const { data } = res
          if (data.result === 1) {
            console.log('프론트엔드 로그인 성공')
            this.$vs.notify({
              title: '로그인 성공',
              text: data.message,
              color: 'success'
            })
            this.$store.commit('login', data)
            // this.$cookie.set('accessToken', data.token, 7)
            this.$router.push('/')
          }
          if (data.result === 0) {
            console.log('프론트엔드 로그인 실패')
            this.$vs.notify({
              title: '로그인 실패',
              text: data.message,
              color: 'danger'
            })
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('프론트엔드 로그인 실패')
          this.$vs.notify({
            title: '로그인 실패',
            text: '비밀번호를 다시 입력하세요.' || err,
            color: 'danger'
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {
  width: 70%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  margin: 10px 0;
  .vs-input {
    margin: 10px 0;
  }
}
</style>
