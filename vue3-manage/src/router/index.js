import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: () => import('../views/Main.vue'),
        children: [],
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/Home.vue'),
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user/User.vue'),
            },
            {
                path: '/other/page1',
                name: 'page1',
                component: () => import('../views/other/Page1.vue'),
            },
            {
                path: '/other/page2',
                name: 'page2',
                component: () => import('../views/other/Page2.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Login.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router