import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/home'
import Blog from '@pages/blog'
import Admin from '@pages/admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router