<template>
  <div class="signup-form">
    <h2>회원가입</h2>
    <div class="signup-form__container">
      <form method="POST" @submit.prevent="submit">
        <vs-input type="email" v-model="email" placeholder="이메일" required />
        <vs-input v-model="name" placeholder="이름" required />
        <vs-input v-model="username" placeholder="닉네임" required />
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      name: '',
      username: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    submit() {
      const { email, name, username, password, password2 } = this
      if (password !== password2) {
        alert('비밀번호가 일치하지 않습니다.')
        return
      }
      this.$emit('submit', { email, name, username, password })
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
