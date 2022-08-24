import Cookie from "js-cookie"


export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home',
            },
        ],
        currentMenu: null,
        menu: [],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        closeTab(state, index) {
            state.tabsList.splice(index, 1)
        },
        setMenu(state, val) {
            state.menu = val
            console.log('val', val)
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state, router) {
            // 把获取到菜单数据转换成路由
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = [
                {
                    path: '/',
                    name: 'Main',
                    component: () => import("../views/Main.vue"),
                    children: []
                }
            ]
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray[0].children.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray[0].children.push(item)
                }
            })
            console.log('menuArray', menuArray)
            router.addRoutes(menuArray)
        }
    }
}