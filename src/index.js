import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/style/init.less'
import axios from '@/libs/axios'
import LoadingBar from '@components/common/loading-bar'
import envConfig from '@constants/env'
import antd from '@components/antd'
// import { Button } from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style'
Vue.config.productionTip = false
const config = envConfig[process.env.NODE_ENV]
Vue.prototype.$envConfig = config
Vue.prototype.$axios = axios(config)
Vue.prototype.$loadingbar = LoadingBar

Vue.use(antd)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')