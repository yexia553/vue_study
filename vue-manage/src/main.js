import Vue from 'vue';
import ElementUI, { MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '../router';
import './assets/less/index.less';
import store from '../store';
import '../api/mock.js'
import http from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
