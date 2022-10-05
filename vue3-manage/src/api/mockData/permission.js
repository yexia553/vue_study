import Mock from 'mockjs'

export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                menu: [
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: 'house',
                        url: 'home/Home.vue'
                    },
                    {
                        path: '/mall',
                        name: 'mall',
                        label: '商品管理',
                        icon: 'video-play',
                        url: 'mall/Mall.vue'
                    },
                    {
                        path: '/user',
                        name: 'user',
                        label: '用户管理',
                        icon: 'user',
                        url: 'user/User.vue'
                    },
                    {
                        label: '其他',
                        name: 'other',
                        icon: 'location',
                        children: [
                            {
                                path: '/page1',
                                name: 'page1',
                                label: '页面1',
                                icon: 'setting',
                                url: 'other/Page1.vue'
                            },
                            {
                                path: '/page2',
                                name: 'page2',
                                label: '页面2',
                                icon: 'setting',
                                url: 'other/Page2.vue'
                            }
                        ]
                    }
                ],
                token: Mock.Random.guid(),
                message: 'success'
            }
        } else if (username === 'test' && password === 'test') {
            return {
                menu: [
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: 's-home',
                        url: 'Home/index'
                    },
                    {
                        path: '/mall',
                        name: 'mall',
                        label: '商品管理',
                        icon: 'video-play',
                        url: 'mall/Mall.vue'
                    }
                ],
                token: Mock.Random.guid(),
                message: 'success'
            }
        } else {
            return {
                message: 'fail'
            }
        }

    }
}
