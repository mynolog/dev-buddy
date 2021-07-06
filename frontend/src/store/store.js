import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      email: null,
      name: null
    },
    token: null,
    loggedIn: false
  },
  mutations: {
    setUserInfo(state, payload) {
      state.loggedIn = true
      state.token = payload.token
      state.user.id = payload.user.id
      state.user.email = payload.user.email
      state.user.name = payload.user.name
    },
    resetUserInfo(state) {
      state.loggedIn = false
      state.token = null
      state.user.id = null
      state.user.email = null
      state.user.name = null
    }
  },
  getters: {},
  actions: {},
  plugins: [createPersistedState()]
})
