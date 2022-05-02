import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/indexScreen.vue'
import login from '../views/loginScreen.vue'
import signup from '../views/signUpScreen.vue'
import addVehicle from '../views/addVehicle.vue'
import order from '../views/orderNow.vue'
import chooseStation from '../views/chooseStation.vue'
import NotFound from '../views/404.vue'
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
    {
        path: '/chooseStation',
        name: 'chooseStation',
        component: chooseStation,
        meta: { title: 'Choose Station | OrderTech' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
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
        !localStorage.getItem('checkLogedUser') &&
        to.path !== '/login' &&
        to.path !== '/signup' &&
        to.path !== '/404'
    ) {
        return { path: '/login' }
    }
})

export default router
