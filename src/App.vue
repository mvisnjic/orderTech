<template>
    <div id="app" class="h-screen">
        <div
            class="grid lg:grid-cols-3 sm:grid-cols-2 items-center pt-4 bg-[#FCFCFF]"
            id="nav"
        >
            <div class="pl-36 sm:pl-16">
                <router-link to="/" class="px-12">
                    <img src="./assets/logo.png" />
                </router-link>
            </div>
            <div class="text-[20px] flex flex-row justify-center space-x-5">
                <div
                    v-if="store.currentUser"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/">Home</router-link>
                </div>
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
                    @click="signout()"
                >
                    Log out
                </a>
            </div>
            {{ store.currentUser }}
        </div>
        <router-view />
    </div>
</template>

<script setup>


</script>

<script>
import { firebase, db } from './firebase'
import { store } from './store'
import { onAuthStateChanged, getAuth,  signOut } from 'firebase/auth'


const auth = getAuth()
//monitoring the user's login status
onAuthStateChanged(auth, (user) => {
    if (user) {
        store.currentUser = user.email
        localStorage.setItem('checkLogedUser', store.currentUser)
        console.log('Success', store.currentUser)
    } else {
        store.currentUser = null
        localStorage.clear()
    }
})

export default {
    name: 'app',
    firestore: {
        users: db.collection('users'),
    },
    data() {
        return {
            store,
            users: [],
        }
    },
    methods: {
        signout() {
            //const auth = getAuth();
                signOut(auth)
                .then(() => {
                    this.$router.replace({ name: 'Login' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
    /*mounted() {
        getData()
    },*/
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #fcfcff;
}
</style>
