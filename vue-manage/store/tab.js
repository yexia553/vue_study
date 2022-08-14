import Cookies from "js-cookie"


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
            console.log("set menu 1")
            Cookies.set('menu', JSON.stringify(val))
            console.log("set menu 2")
        },
        clearMenu(state) {
            state.menu = []
            Cookies.remove('menu')
        },
        addMenu(state, router) {
            // 把获取到菜单数据转换成路由
            if (!Cookies.get('menu')) {
                return
            }
            console.log("add menu 1")
            console.log("menu", Cookies.get('menu'))
            const menu = JSON.parse(Cookies.get('menu'))
            console.log("add menu 2")
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            menuArray.foreach(item => {
                router.addRoute('Main', item)
            })

        }
    }
}