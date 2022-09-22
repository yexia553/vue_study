/**
 * 项目的环境配置
 */

// 这是vite的一种使用方式：https://cn.vitejs.dev/guide/env-and-mode.html#env-files
const env = import.meta.env.MDOE || 'dev'

const envConfig = {
    dev:{
        baseApi: 'dev.example.com/api',
        mockApi: 'http://localhost:5173/'
    },
    test:{
        baseApi: 'test.example.com/api',
        mockApi: 'http://localhost:5173/'
    },
    prod:{
        baseApi: 'example.com/api',
        mockApi: ''
    }
}

export default {
    env, 
    mock: true, // 控制使用mock与否的总开关
    ...envConfig[env]
}
