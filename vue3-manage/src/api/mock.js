import Mock from 'mockjs'
import homeapi from './mockData/home.js'
import permissionapi from './mockData/permission.js'

// 拦截请求
Mock.mock('/home/getData', homeapi.getHomeData)
Mock.mock('/home/getCountData', homeapi.getHomeCountData)
Mock.mock('/home/getEchartData', homeapi.getEchartData)
Mock.mock('/home/getAsideMenu', permissionapi.getMenu)