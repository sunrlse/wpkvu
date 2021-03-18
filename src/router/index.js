import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/home'
import Blog from '@pages/blog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router