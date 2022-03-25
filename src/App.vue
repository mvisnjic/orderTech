<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <div id="app" class="h-screen">
        <div
            class="grid lg:grid-cols-3 sm:grid-cols-2 items-center pt-4 bg-[#FCFCFF]"
            id="nav"
        >
            <div class="pl-36 sm:pl-16">
                <a href="#" class="px-12">
                    <img src="./assets/logo.png" />
                </a>
            </div>
            <div class="text-[20px] flex flex-row justify-center space-x-5">
                <!--  <router-link
                    to="/"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    >Home</router-link
                >
                | -->
                <div
                    v-if="store.currentUser"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/addvehicle">My Cars</router-link>
                </div>

                <div
                    v-if="!store.currentUser"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/login">Login</router-link>
                </div>

                <div
                    v-if="!store.currentUser"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/signup">Sign up</router-link>
                </div>

                <a
                    href="#"
                    v-if="store.currentUser"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    @click="logout()"
                >
                    Log out
                </a>
                <!--    <router-link
                    to="/addvehicle"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    v-if="store.currentUser"
                    >My Cars</router-link
                >
                |
                <router-link
                    to="/login"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    v-if="!store.currentUser"
                    >Login</router-link
                >
                |
                <router-link
                    to="/signup"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    v-if="!store.currentUser"
                    >Sign up</router-link
                > 
                
                <a
                    href="#"
                    v-if="store.currentUser"
                    @click="logout()"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold">Log out</a> -->
            </div>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #fcfcff;
}
</style>

<script>
import { firebase } from './firebase'
import store from './store'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

const auth = getAuth()
//monitoring the user's login status
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user.email)
        store.currentUser = user.email
    } else {
        console.log('No user')
        store.currentUser = null
    }
})

export default {
    name: 'app',
    data() {
        return {
            store,
        }
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({ name: 'Login' })
                })
        },
    },
}
</script>
