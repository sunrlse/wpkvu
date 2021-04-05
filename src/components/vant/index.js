import {
    Col,
    Row,
    Cell,
    Button,
    Calendar
  } from 'vant'
  
  export default {
    install(Vue) {
        Vue.use(Cell)
        Vue.use(Col)
        Vue.use(Row)
        Vue.use(Button)
        Vue.use(Calendar)
    }
  }
  