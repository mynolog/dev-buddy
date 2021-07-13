import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Home from '../views/Home.vue'
import store from '../store/store'

Vue.use(VueRouter)

const authRequired = () => (to, from, next) => {
  const isLoggedIn = store.getters.getLoggedIn
  if (!isLoggedIn) {
    console.log('라우팅 실패: 페이지 접근 권한이 없습니다.')
    return next('/login')
  } else {
    console.log(`라우팅 성공: ${to.path}`)
    return next()
  }
}

const loggedIn = () => (to, from, next) => {
  const isLoggedIn = store.getters.getLoggedIn
  if (!isLoggedIn) {
    return next()
  } else if (isLoggedIn) {
    console.log('라우팅 실패: 로그인 상태입니다.')
    return next('/')
  } else {
    console.log(`라우팅 성공: ${to.path}`)
    return next()
  }
}

const isAuthor = () => (to, from, next) => {
  const storedInfo = JSON.parse(localStorage.getItem('vuex'))
  const {
    user: { id: userId }
  } = storedInfo
  const {
    params: { id: postId }
  } = to
  axios.get(`/api/posts/${postId}`).then(({ data }) => {
    const { post } = data
    const postInfo = JSON.parse(post)
    const { user_id: authId } = postInfo
    const isAuthor = authId === userId
    if (!isAuthor) {
      alert('포스팅 수정 권한이 없습니다.')
      next(from)
      return false
    }
    next()
  })
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/posts/:id/edit',
    name: 'EditPost',
    component: () => import('../views/EditPost.vue'),
    beforeEnter: isAuthor()
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
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
