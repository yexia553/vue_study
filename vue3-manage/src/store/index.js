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
        setMenus(state) {
            const menus = localStorage.getItem('menus') 
            if (!menus) {
                return
            }
            state.menus = JSON.parse(menus)
        },
    }
})