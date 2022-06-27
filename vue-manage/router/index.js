import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import("../views/Main.vue"),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("../views/Home")
            },
            {
                path: '/user',
                name: 'user',
                component: () => import("../views/User")
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import("../views/Mall")
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router