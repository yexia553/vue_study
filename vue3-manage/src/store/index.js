import { createStore } from 'vuex'


export default createStore({
    state: {
        collapse: true,
        storedMenus: [],
        menus: [],
    },
    mutations: {
        updateCollapse(state, payload) {
            state.collapse = !state.collapse
        },
        addMenus(state, val) {
            // 将店里过的菜单存储为header中的标签
            // TODO, 要判断存在与否
            state.storedMenus.push(val)
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
    }
})