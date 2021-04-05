import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  router.beforeEach((to, from, next) => {
    // const { title } = to.meta
    // if (title) {
    //   document.title = title
    // }
    if (isWeiXin()) {
      alert('is wechat')
      location.href = location.host + to.fullPath
      return next()
    }
    next()
  })

  return router
}

function isWeiXin(){
  var ua = window.navigator.userAgent.toLowerCase()
  // var wechatInfo = window.navigator.userAgent.match(/MicroMessenger\\\/([\\d\\.]+)/i)
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  }
  return false
}