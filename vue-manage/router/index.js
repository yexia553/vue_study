import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import("../views/Main.vue"),
        children: [
    //         // {
    //         //     path: '/home',
    //         //     name: 'home',
    //         //     component: () => import("../views/Home")
    //         // },
    //         // {
    //         //     path: '/user',
    //         //     name: 'user',
    //         //     component: () => import("../views/User")
    //         // },
    //         // {
    //         //     path: '/mall',
    //         //     name: 'mall',
    //         //     component: () => import("../views/Mall")
    //         // },
    //         // {
    //         //     path: '/pageone',
    //         //     name: 'pageOne',
    //         //     component: () => import("../views/Other/pageOne.vue")
    //         // },
    //         // {
    //         //     path: '/pagetwo',
    //         //     name: 'pageTwo',
    //         //     component: () => import("../views/Other/pageTwo.vue")
    //         // },
        ]
    },
    {
        path: '/login',
        name: "login",
        component: () => import("../views/Login")
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router