import { createStore } from 'vuex'
import Cookies from "js-cookie"


export default createStore({
    state: {
        access_token: '',
        refresh_token: '',
        last_token_refresh_time: new Date("October 01, 1975 00:00:00"),
    },
    mutations: {
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