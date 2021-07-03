import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuesax)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
