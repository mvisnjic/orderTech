import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/indexScreen.vue'
import login from '../views/loginScreen.vue'
import signup from '../views/signUpScreen.vue'
import addVehicle from '../views/addVehicle.vue'
import order from '../views/orderNow.vue'
import { store } from '../store'
const routes = [
    {
        path: '/',
        name: 'Index',
        component: index,
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: { title: 'Login | OrderTech' },
    },
    {
        path: '/signup',
        name: 'Signup',
        component: signup,
        meta: { title: 'Sign Up | OrderTech' },
    },
    {
        path: '/addvehicle',
        name: 'addVehicle',
        component: addVehicle,
        meta: { title: 'My Cars | OrderTech' },
    },
    {
        path: '/order',
        name: 'order',
        component: order,
        meta: { title: 'Order Now | OrderTech' },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const defaultTitle = 'OrderTech'
router.afterEach((to) => {
    document.title = to.meta.title || defaultTitle
})

router.beforeEach((to) => {
    if (
        !localStorage.getItem('checkLogedUser', store.currentUser) &&
        to.path !== '/login' &&
        to.path !== '/signup'
    ) {
        return { path: '/login' }
    }
})

export default router
