import Mock from 'mockjs'
import homeapi from './mockData/home.js'

// 拦截请求
Mock.mock('/home/getData', homeapi.getHomeData)
Mock.mock('/home/getCountData', homeapi.getHomeCountData)