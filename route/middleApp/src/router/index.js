import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import NotFound from '../components/NotFound.vue'
import Welcome from '../components/Welcome.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Welcome
        },
        {
            name: 'notFound',
            path: '*',
            component: NotFound
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === 'notFound') {
        window.appModules.actions.loadModules(to, next)
    } else {
        next()
    }
})

export default router