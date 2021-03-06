import { createRouter, createWebHistory } from 'vue-router'
import notFound from '../views/404.vue'
import myCars from '../views/myCars.vue'
import chooseStation from '../views/chooseStation.vue'
import index from '../views/indexScreen.vue'
import login from '../views/loginScreen.vue'
import selectDate from '../views/selectDate.vue'
import signup from '../views/signUpScreen.vue'
import chooseCar from '../views/chooseCar.vue'
import successOrder from '../views/successOrder.vue'
import checkoutOrder from '../views/checkoutOrder.vue'
import successCheckout from '../views/successCheckout.vue'
import deleteCar from '../views/deleteCar.vue'

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
        path: '/mycars',
        name: 'myCars',
        component: myCars,
        meta: { title: 'My Cars | OrderTech' },
    },
    {
        path: '/selectdate',
        name: 'selectDate',
        component: selectDate,
        meta: { title: 'Select a date | OrderTech' },
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
        component: notFound,
        meta: { title: 'Not found | OrderTech' },
    },
    {
        path: '/chooseCar',
        name: 'chooseCar',
        component: chooseCar,
        meta: { title: 'Choose car | OrderTech' },
    },
    {
        path: '/successOrder',
        name: 'successOrder',
        component: successOrder,
        meta: { title: 'Order success! | OrderTech' },
    },
    {
        path: '/checkout',
        name: 'checkoutOrder',
        component: checkoutOrder,
        meta: { title: 'Checkout | OrderTech' },
    },
    {
        path: '/successcheckout',
        name: 'successCheckout',
        component: successCheckout,
        meta: { title: 'Checkout success! | OrderTech' },
    },
    {
        path: '/deleteCar/:registration',
        name: 'deleteCar',
        component: deleteCar,
        props: true,
        meta: { title: 'Delete car | OrderTech' },
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
