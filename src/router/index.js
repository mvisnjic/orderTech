import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/indexScreen.vue'
import login from '../views/loginScreen.vue'
import signup from '../views/signUpScreen.vue'
import addVehicle from '../views/addVehicle.vue'
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
    },
    {
        path: '/signup',
        name: 'Signup',
        component: signup,
    },
    {
        path: '/addvehicle',
        name: 'addVehicle',
        component: addVehicle,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
