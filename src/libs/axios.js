import axios from 'axios'
import Cookie from 'js-cookie'
import LoadingBar from '@/components/common/loading-bar'

function getToken () {
  return Cookie.get('xxx') || ''
}

function request (options) {
  let defOpt = {
    method: 'get',
    headers: {},
    timeout: 30000
  }
  let opt = Object.assign({}, defOpt, options)
  if (!options.noDocToken) {
    opt.headers.authorization = getToken()
  }
  return new Promise((resolve) => {
    const instance = axios.create(opt)
    instance.interceptors.request.use(
      config => {
        LoadingBar.start()
        return config
      },
      error => {
        // console.log('on request error ', error)
        return Promise.resolve({
          header: {
            code: -1,
            msg: 'request error',
            error
          },
          data: null
        })
      }
    )
  
    instance.interceptors.response.use(
      response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if(response.data == undefined){
          data = response.request.responseText
        } else{
          data = response.data
        }
        return data
      },
      error => {
        // console.log('on response error ', error)
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
            error.message = '请求错误'
            break
        
            case 401:
            error.message = '未授权，请登录'
            break
        
            case 403:
            error.message = '拒绝访问'
            break
        
            case 404:
            error.message = `404: ${error.response.config.url} Not Found`
            break
        
            case 500:
            error.message = '服务器内部错误'
            break
        
            case 501:
            error.message = '服务未实现'
            break
        
            case 502:
            error.message = '网关错误'
            break
        
            case 503:
            error.message = '服务不可用'
            break
        
            case 504:
            error.message = '网关超时'
            break
        
            case 505:
            error.message = 'HTTP版本不受支持'
            break
        
            default:
          }
        }
        return Promise.resolve({
          header: {
            code: -2,
            msg: 'response error',
            error
          },
          data: null
        }) // 返回接口返回的错误信息
      }
    )
    //请求处理
    instance(options)
      .then((res) => {
        // console.log('then ', res)
        if (res.header.code != 0) {
          LoadingBar.error()
        } else {
          LoadingBar.finish()
        }
        resolve(res)
        
        return false
      })
      .catch((error) => {
        LoadingBar.error()
        // console.log('cat error ', error)
        resolve({
          header: {
            code: -3,
            msg: 'catch error',
            error
          },
          data: null
        })
      })
  })
}

export default function (config) {
  function $axios (options) {
    options.apiPrefix = config.baseUrl
    return request(options)
  }
  $axios.apiPrefix = config.baseUrl
  $axios.get = function (url, params, options) {
    if (!/^https?:\/\//.test(url)) {
      url = this.apiPrefix + url
    }
    let get_opt = Object.assign({}, options, {
        method: 'get',
        url,
        params
      })
    return request(get_opt)
  }
  $axios.post = function (url, params, options) {
    if (!/^https?:\/\//.test(url)) {
      url = this.apiPrefix + url
    }
    let post_opt = Object.assign({}, options, {
      method: 'post',
      url,
      data: params
    })
    return request(post_opt)
  }
  return $axios
}
