import axios from 'axios'

//  创建一个axios实例，为其设置一些基础配置参数
const instance = axios.create({
  timeout: 5000, //  请求超时时间,如果超过5秒就会报错
  baseURL: 'http://localhost:3009' //  表示我们请求api时候的基础地址，此地址会拼接上请求中的url
})

// Add a request interceptor
// 全局请求拦截，所有的网络请求发起之前都会走这个文件
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log('请求执行之前')
    config.headers.token = 'haha' //  但登录成功之后会把token信息存储在本地，此时可以从本地中取出token
    console.log(config.data)
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
//  全局响应拦截，所有的网络请求返回之后都会走这里
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('请求执行完成')
    //  response  表示返回的结果 我们可以对这个结果做处理
    // console.log(response)
    console.log(response.data)
    return response.data
  },
  function(error) {
    if (error.message.indexOf('timeout') > -1) {
      alert('请求超时')
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.dir(error)
    return Promise.reject(error)
  }
)

export default instance
/*
 发起的post请求
 url  请求地址
 data 传递的数据
*/
export function get(url, params) {
  return instance.get(url, {
    params
  })
}
// export const get = (url, params) => instance.get(ul, { params })
export function post(url, data) {
  return instance.post(url, data)
}
export function put(url, data) {
  return instance.put(url, data)
}
export function del(url) {
  return instance.delete(url)
}
