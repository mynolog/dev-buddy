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
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      const { email, password } = this
      this.$emit('submit', { email, password })
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
