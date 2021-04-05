import Vue from 'vue'
import { createRouter } from './router'
import App from './App.vue'
// import '@/assets/style/init.less'
import axios from '@/libs/axios'
// import LoadingBar from '@components/common/loading-bar'
import envConfig from '@constants/env'
import wechatTitle from 'vue-wechat-title'
import vant from '@components/vant'
Vue.config.productionTip = false
const config = envConfig[process.env.NODE_ENV]
Vue.prototype.$envConfig = config
Vue.prototype.$axios = axios(config)
// Vue.prototype.$loadingbar = LoadingBar

// ios 有时在微信公众号里面通过document.title修改标题无效，通过此指令解决(可能不同版本又无效了？？ location.href刷新页面解决)
Vue.use(wechatTitle)
Vue.use(vant)

new Vue({
    el: '#app',
    router: createRouter(),
    render: h => h(App),
})