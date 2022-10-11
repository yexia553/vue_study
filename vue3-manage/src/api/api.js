/**
 * 整个项目mock api的管理
 */

import request from "./request.js";


export default {
    // getHomeTableData(params) {
    //     return request({
    //         url: '/home/getData',
    //         method: 'get',
    //         data: params,
    //         mock: true
    //     })
    // },
    getHomeTableData(params) {
        return request({
            url: 'vue/courses',
            method: 'get',
            data: params,
            mock: false
        })
    },
    getHomeCountData(params) {
        return request({
            url: '/home/getCountData',
            method: 'get',
            data: params,
            mock: true
        })
    },
    getEchartData(params) {
        return request({
            url: '/home/getEchartData',
            method: 'get',
            data: params,
            mock: true
        })
    },
    getAsideMenu(params) {
        return request({
            url: '/home/getAsideMenu',
            method: 'post',
            data: params,
            mock: true
        })
    }
}
