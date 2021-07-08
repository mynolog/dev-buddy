import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { authRequired: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { authRequired: false }
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: { authRequired: true }
  },
  {
    path: '/dash-board',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue'),
    meta: { authRequired: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: { authRequired: false }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts.vue'),
    meta: { authRequired: true }
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    meta: { authRequired: true }
  },
  {
    path: '/new-post',
    name: 'NewPost',
    component: () => import('../views/NewPost.vue'),
    meta: { authRequired: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((routeInfo) => {
      return routeInfo.meta.authRequired
    })
  ) {
    alert('로그인하세요!')
    next('/login')
  } else {
    console.log(`routing success to: ${to.path}`)
    next()
  }
})

export default router
