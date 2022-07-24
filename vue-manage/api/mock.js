import Mock from 'mockjs'
import homeapi from './mockServerData/home.js'
import userapi from './mockServerData/user.js'


Mock.mock("/home/getData", homeapi.getStatisticalData)
Mock.mock("/user/add", userapi.createUser)
Mock.mock("/user/edit", userapi.updateUser)
Mock.mock(/user\/getUser/, 'get', userapi.getUserList)
Mock.mock(/user\/del/, 'post', userapi.deleteUser)