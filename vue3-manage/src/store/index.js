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
                // {
                //     path: '/',
                //     name: 'main',
                //     component: () => import('../views/Main.vue'),
                //     children: [],
                // },
                // {
                //     path: '/login',
                //     name: 'login',
                //     component: () => import('../views/login/Login.vue')
                // },
            ]

            state.menus.forEach(item => {
                if (item.children) {
                    item.children = item.children.map( item => {
                        let url = `../views/${item.url}`
                        item.component = () => import(url)
                        return item
                    })
                    menuArray.push(item)
                } else {
                    let url = `../views/${item.url}`
                    item.component = () => import(url)
                    menuArray.push(item)
                }
                router.addRoute('main', item)
            })

        },
    }
})