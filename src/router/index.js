import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '@pages/home'
// import Blog from '@pages/blog'
const Home = () => import(/* webpackChunkName: 'home' */ '@pages/home')
const Blog = () => import(/* webpackChunkName: 'blog' */ '@pages/blog')
const Admin = () => import(/* webpackChunkName: 'user' */ '@pages/admin')
const AdminUser = () => import(/* webpackChunkName: 'user' */ '@pages/admin/user')
const NotFoundComponent = () => import(/* webpackChunkName: 'notfound' */ '@pages/404')
// import Admin from '@pages/admin'
// import AdminUser from '@pages/admin/user'
// import NotFoundComponent from '@pages/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    alias: '/bk',
    component: Blog
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '/admin/user',
        name: 'admin__user',
        component: AdminUser
      }
    ]
  },
  // {
  //   path: '/admin/user',
  //   component: AdminUser
  // },
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