import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/style/init.css'
import axios from '@/libs/axios'
import LoadingBar from '@components/common/loading-bar'
import envConfig from '@constants/env'

const config = envConfig[process.env.NODE_ENV]
Vue.prototype.$envConfig = config
Vue.prototype.$axios = axios(config)
Vue.prototype.$loadingbar = LoadingBar

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')