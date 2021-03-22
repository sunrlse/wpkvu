import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/home'
import Blog from '@pages/blog'
import Admin from '@pages/admin'
import NotFoundComponent from '@pages/404'

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
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router