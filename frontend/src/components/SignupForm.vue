<template>
  <div class="signup-form">
    <h2>회원가입</h2>
    <div class="signup-form__container">
      <form method="POST" @submit.prevent="submit">
        <vs-input type="email" v-model="email" placeholder="이메일" required />
        <vs-input v-model="name" placeholder="이름" required />
        <vs-input
          type="password"
          placeholder="비밀번호"
          v-model="password"
          required
        />
        <vs-input
          type="password"
          placeholder="비밀번호 확인"
          v-model="password2"
          required
        />
        <vs-button button="submit" color="primary" type="filled"
          >회원가입</vs-button
        >
      </form>
      <router-link to="/login">로그인하러 가기 &rarr;</router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      name: '',
      password: '',
      password2: '',
      loading: false
    }
  },

  methods: {
    openNoti(keyword, message) {
      this.$vs.notification({
        title: keyword,
        text: message
      })
    },
    submit() {
      this.loading = true
      this.$vs.loading()
      const { email, name, password, password2 } = this
      if (password !== password2) {
        alert('비밀번호가 일치하지 않습니다.')
        return
      }
      api
        .post('/api/signup', {
          email,
          name,
          password
        })
        .then((res) => {
          this.loading = false
          this.$vs.loading.close()

          const { data } = res
          // 회원가입 성공 시
          if (data.result === 1) {
            this.$vs.notify({
              title: 'Signup Success',
              text: data.message,
              color: 'success'
            })
            this.$router.push('/login')
          }
          // 회원가입 실패 시
          if (data.result === 0) {
            // alert(data.message)
            this.$vs.notify({
              title: 'Signup Failed',
              text: data.message,
              color: 'danger'
            })
            this.openNoti('Error', data.message)
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped lang="scss">
.signup-form {
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
