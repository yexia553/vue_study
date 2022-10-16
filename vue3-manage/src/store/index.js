import { createStore } from 'vuex'
import Cookies from "js-cookie"


export default createStore({
    state: {
        collapse: true,
        storedMenus: [],
        menus: [],
        access_token: '',
        refresh_token: '',
        last_token_refresh_time: new Date("October 01, 1975 00:00:00"),
    },
    mutations: {
        updateCollapse(state, payload) {
            state.collapse = !state.collapse
        },
        addMenus(state, val) {
            // 将店里过的菜单存储为header中的标签
            if (!state.storedMenus.includes(val)) {
                state.storedMenus.push(val)
            }
        },
        updateMenus(state, val) {
            state.menus = val
            localStorage.setItem('menus', JSON.stringify(state.menus))
        },
        setMenus(state, router) {
            const menus = localStorage.getItem('menus')
            if (!menus) {
                return
            }
            state.menus = JSON.parse(menus)

            const menuArray = [
            ]
            state.menus.forEach(item => {
                const views = import.meta.glob('../views/*/*.vue')
                if (item.children) {
                    item.children = item.children.map(item => {
                        let url = '../views/' + item.url
                        item.component = import(url)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    let url = '../views/' + item.url
                    item.component = import(url)
                    menuArray.push(item)
                }
            })
            menuArray.forEach(item => {
                router.addRoute('main', item)
            })
            console.log('menuArry:', menuArray)
        },
        setAccessToken(state, val) {
            state.access_token = val
            Cookies.set('access_token', val)
        },
        clearAccessToken(state) {
            state.access_token = ''
            Cookies.remove('access_token')
        },
        getAccessToken(state) {
            state.access_token = state.access_token || Cookies.get('access_token')
        },
        setRefreshToken(state, val) {
            state.refresh_token = val
            Cookies.set('refresh_token', val)
        },
        clearRefreshToken(state) {
            state.refresh_token = ''
            Cookies.remove('refresh_token')
        },
        getRefreshToken(state) {
            state.refresh_token = state.refresh_token || Cookies.get('refresh_token')
        },
        updateLastRefreshTime(state) {
            state.last_token_refresh_time = new Date().getTime()
            Cookies.set('last_token_refresh_time', state.last_token_refresh_time)
        },
    }
})