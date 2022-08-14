import Mock from 'mockjs'
import homeapi from './mockServerData/home.js'
import userapi from './mockServerData/user.js'
import permissionapi from './mockServerData/permission'


Mock.mock("/home/getData", homeapi.getStatisticalData)
Mock.mock("/user/add", userapi.createUser)
Mock.mock("/user/edit", userapi.updateUser)
Mock.mock(/user\/getUser/, 'get', userapi.getUserList)
Mock.mock(/user\/del/, 'post', userapi.deleteUser)
Mock.mock("/permission/getMenu", 'post', permissionapi.getMenu)