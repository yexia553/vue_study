/**
 * 整个项目mock api的管理
 */

import request from "./request.js";


export default {
    getHomeTableData(params) {
        return request({
            url: '/home/getData',
            method: 'get',
            data: params,
            mock: true
        })
    }
}
