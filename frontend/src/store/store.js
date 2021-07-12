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
    loggedIn: false
  },
  mutations: {
    login(state, payload) {
      state.loggedIn = true
      state.user.id = payload.user.id
      state.user.email = payload.user.email
      state.user.name = payload.user.name
    },
    logout(state) {
      state.loggedIn = false
      state.user.id = null
      state.user.email = null
      state.user.name = null
    }
  },
  getters: {
    getLoggedIn(state) {
      return state.loggedIn
    },
    getUser(state) {
      return state.user
    },
    getUserName(state) {
      return state.user.name
    },
    getUserId(state) {
      return state.user.id
    }
  },
  actions: {},
  plugins: [createPersistedState()]
})
