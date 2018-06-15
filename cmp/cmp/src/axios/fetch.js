import axios from 'axios'

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
  //发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => {
  return Promise.reject(error)
})

export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
      // 所有的请求都会带上这些配置，比如全局都要用的身份信息等。
      headers: {
        'Content-Type': 'application/json'
        // 'token_in_header': global_.token,// token从全局变量那里传过来
      },
      xhrFields: {
        withCredentials: true
      },
      timeout: 30 * 1000 // 30秒超时
    })
    instance(options).then(response => {
      // then 请求成功之后进行什么操作
      resolve(response) // 把请求到的数据发到引用请求的地方
    }).catch(error => {
      console.log('请求异常信息：' + error)
      reject(error)
    })
  })
}
