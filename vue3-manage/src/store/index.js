import { createStore } from 'vuex'


export default createStore({
    state: {
        collapse: true,
    },
    mutations: {
        updateCollapse(state, payload) {
            state.collapse = !state.collapse
        }
    }
})