import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuesax from 'vuesax'
import VueCookie from 'vue-cookie'
import store from './store/store'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import VueMoment from 'vue-moment'

Vue.use(VueCookie)
Vue.use(Vuesax)
Vue.use(VueMoment)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
