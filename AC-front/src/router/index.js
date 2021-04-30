import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    hidden: true
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/signin/signin'),
    hidden: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin'),
    hidden: true
  },
  {
    path: '/unverify',
    name: 'Unverify',
    component: () => import('../views/admin/UnVerify'),
    hidden: true
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('../views/admin/Verify'),
    hidden: true
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success'),
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
