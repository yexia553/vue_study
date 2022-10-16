import json

l = [
        {
            "path": '/home',
            "name": 'home',
            "label": '首页',
            "icon": 'house',
            "url": 'home/Home.vue'
        },
        {
            "path": '/mall',
            "name": 'mall',
            "label": '商品管理',
            "icon": 'video-play',
            "url": 'mall/Mall.vue'
        },
        {
            "path": '/user',
            "name": 'user',
            "label": '用户管理',
            "icon": 'user',
            "url": 'user/User.vue'
        },
        {
            "label": '其他',
            "name": 'other',
            "icon": 'location',
            "children": [
                {
                    "path": '/page1',
                    "name": 'page1',
                    "label": '页面1',
                    "icon": 'setting',
                    "url": 'other/Page1.vue'
                },
                {
                    "path": '/page2',
                    "name": 'page2',
                    "label": '页面2',
                    "icon": 'setting',
                    "url": 'other/Page2.vue'
                }
            ]
        }
    ]

l2 = json.dumps(l)
print(l2)
l3 = json.loads(l2)
print(l3)
