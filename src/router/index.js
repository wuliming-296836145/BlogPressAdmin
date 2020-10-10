import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 默认加载页面
  {
    path: '/',
    component: () => import('@/views/login/')
  },
  // 登录页面路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  routes
})

export default router
