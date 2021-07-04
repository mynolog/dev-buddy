<template>
  <div class="signup">
    <h2>회원가입</h2>
    <form method="POST">
      <vs-input
        type="email"
        label="Email"
        v-model="email"
        placeholder="Email"
      />
      <vs-input label="Name" v-model="name" placeholder="Full Name" required />
      <vs-input label="Usernama" v-model="username" placeholder="Username" />
      <vs-input
        type="password"
        label="Password"
        placeholder="Password"
        v-model="password"
      />
      <vs-input
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        v-model="password2"
      />
      <vs-button color="primary" type="filled" @click="userSignup"
        >회원가입</vs-button
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signup',
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
    // TODO: input 유효성 검사를 통과하지 못할 경우에 대한 분기 처리
    userSignup() {
      const { email, name, username, password, password2 } = this
      if (password === password2) {
        this.$axios
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
      } else {
        alert("Password doesn't match..")
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
