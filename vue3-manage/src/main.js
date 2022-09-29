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
store.commit('setMenus')

app.use(ElementPlus).use(router).use(store).mount('#app')
app.config.globalProperties.$api = api