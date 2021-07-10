import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const authRequired = () => (to, from, next) => {
  const storedInfo = JSON.parse(localStorage.getItem('vuex'))
  if (!storedInfo.loggedIn) {
    console.log('라우팅 실패: 페이지 접근 권한이 없습니다.')
    return next('/login')
  } else {
    console.log(`라우팅 성공: ${to.path}`)
    return next()
  }
}

const loggedIn = () => (to, from, next) => {
  const storedInfo = JSON.parse(localStorage.getItem('vuex'))
  if (storedInfo === null) {
    return next()
  } else if (storedInfo.loggedIn) {
    console.log('라우팅 실패: 로그인 상태입니다.')
    return next('/')
  } else {
    console.log(`라우팅 성공: ${to.path}`)
    return next()
  }
}

const firstVisit = () => (to, from, next) => {
  const storedInfo = JSON.parse(localStorage.getItem('vuex'))
  if (storedInfo === null) {
    console.log('첫 방문을 환영합니다.')
    return next('/login')
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: firstVisit()
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: loggedIn()
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: authRequired()
  },
  {
    path: '/dash-board',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue'),
    beforeEnter: authRequired()
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    beforeEnter: loggedIn()
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts.vue'),
    beforeEnter: authRequired()
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    beforeEnter: authRequired()
  },
  {
    path: '/new-post',
    name: 'NewPost',
    component: () => import('../views/NewPost.vue'),
    beforeEnter: authRequired()
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
