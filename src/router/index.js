import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from "@/views/StartView.vue";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/create',
        name: 'create',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue')
    },
    {
        path: '/',
        name: 'start',
        component: StartView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
