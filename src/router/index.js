import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/indexScreen.vue'
import Login from '../views/loginScreen.vue'
import Signup from '../views/signupScreen.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
