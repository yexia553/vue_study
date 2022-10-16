import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import store from './store/index.js'
import router from './router/index.js'
import './api/mock.js'
import api from './api/api.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// 为element plus注册icon的使用方法
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

store.commit('setMenus', router)

router.beforeEach((to, from, next) => {
    store.commit('getAccessToken')
    const token = store.state.access_token
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        next({ name: 'home' })
    } else (
        next()
    )
})

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
app.config.globalProperties.$api = api