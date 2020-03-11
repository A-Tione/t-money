import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statis from '@/views/Statis.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/labels',
        name: 'Labels',
        component: Labels
    },
    {
        path: '/statis',
        name: 'Staits',
        component: Statis
    },
]

const router = new VueRouter({
    routes
})

export default router
