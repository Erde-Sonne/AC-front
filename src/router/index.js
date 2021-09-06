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
    component: () => import('../views/admin/Aside'),
    hidden: true
  },
  // {
  //   path: '/unverify',
  //   name: 'Unverify',
  //   component: () => import('../views/admin/UnVerify'),
  //   hidden: true
  // },
  // {
  //   path: '/verify',
  //   name: 'verify',
  //   component: () => import('../views/admin/Verify'),
  //   hidden: true
  // },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success'),
    hidden: true
  },
  {
    path:'/adminLog',
    name:'adminLog',
    component: () => import('../views/login/AdminLog')
  },
  //导航测试
  {
    path:'/adminTest',
    name:'用户管理',
    component: () => import('../views/admin/Aside'),
    show: true,
    // redirect: '/unverify',
    children: [
        {
      path: '/unverify',
      name: '用户注册审核',
      component: () => import('../views/admin/UnVerify'),

    },
      {
        path: '/verify',
        name: '用户权限修改',
        component: () => import('../views/admin/Verify'),

      },
      {
        path:'/tree',
        name:'资源策略设置',
        component:() => import('../views/admin/SetPolicy')
      },
      {
        path:'/policyUpdate',
        name:'资源策略修改',
        component:() => import('../views/admin/PolicyUpadte')
      }
      ]
  }
//*****
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
