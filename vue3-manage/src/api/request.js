import axios from 'axios'
import config from './config.js'
import { ElMessage } from 'element-plus'


const NETWORK_ERROR = '网络请求错误，请稍后重试...'
const service = axios.create({
    baseURL: config.baseApi
})

service.interceptors.request.use((req) => {
    //可以在请求之前做一些事情
    //比如自定义header， jwt-token等等
    return req
})

service.interceptors.response.use((res) => {
    // 对请求得到的响应做一些处理
    if (res.status === 200 ){
        // 状态码是200表明请求正常，可以返回请求到的数据也可以做一些其他事情
        return res
    } else {
        // 状态码不是200说明请求可能出错了
        ElMessage.error(NETWORK_ERROR)
        return Promise.reject(NETWORK_ERROR)
    }
})


function request(options) {
    options.method = options.method || 'get' // 如果没有传入methd这个参数，就默认是get请求
    if (options.method.toLowerCase() === 'get') {
        // console.log(options)
        options.params = options.data
    }

    // 允许调用接口的时候传入mock参数来决定是否使用mock api
    let isMock = config.mock
    if (options.mock !== 'undefined') {
        isMock = options.mock
    }

    // 如果是prod环境，禁止使用mock api
    // 如果不是prod环境，就根据isMock参数来决定是否使用mock api
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options) // 这个作用是什么？ 
}

export default request