import Mock from 'mockjs'
import homeapi from './mockServerData/home.js'


Mock.mock("/home/getData", homeapi.getStatisticalData)