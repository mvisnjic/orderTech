<template>
    <div id="app" class="h-screen">
        <div
            class="grid grid-cols-2 justify-content-start pt-6 sm:pt-6 md:pt-6 md:grid-cols-3 md:items-center bg-[#FCFCFF]"
            id="nav"
        >
            <div class="pl-8 md:pl-16">
                <router-link to="/" class="sm:px-12">
                    <img src="./assets/logo.png" />
                </router-link>
            </div>

            <div
                class="absolute flex justify-self-end top-8 sm:top-2 mr-8 sm:mt-6 block md:hidden"
            >
                <button
                    @click="toggle"
                    class="flex items-start px-3 py-2 border rounded text-black border-[#E55050] hover:text-black hover:border-[#E55050] hover:border-2"
                >
                    <svg
                        class="h-3 w-3"
                        fill="rgb(229, 80, 80)"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div
                class="text-[20px] pt-16 sm:pt-[70px] pr-8 sm:pr-8 sm:p-0 md:p-0 flex flex-col items-end md:flex md:flex-row md:justify-center space-x-5"
                :class="open ? 'block' : 'hidden'"
            >
                <div
                    v-if="store.currentUserEmail"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/">Home</router-link>
                </div>
                <div
                    v-if="store.currentUserEmail"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/addvehicle">My Cars</router-link>
                </div>

                <div
                    v-if="!store.currentUserEmail"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/login">Login</router-link>
                </div>

                <div
                    v-if="!store.currentUserEmail"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                >
                    <router-link to="/signup">Sign up</router-link>
                </div>

                <a
                    href="#"
                    v-if="store.currentUserEmail"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    @click="signout()"
                >
                    Log out
                </a>
            </div>
            <p
                v-if="store.currentFirstName"
                class="absolute sm:absolute md:static font-bold text-xl mt-3 ml-32 sm:mt-3 md:m-0 flex justify-self-center"
            >
                Hi, {{ store.currentFirstName }}
            </p>
        </div>
        <router-view />
    </div>
</template>

<script>
import { firebase, db } from './firebase'
import { store } from './store'
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'

const auth = getAuth()
//monitoring the user's login status
onAuthStateChanged(auth, (user) => {
    if (user) {
        store.currentUserEmail = user.email
        localStorage.setItem('checkLogedUser', store.currentUserEmail)
        store.currentFirstName = user.displayName
        console.log('Success', store.currentFirstName)
    } else {
        store.currentUserEmail = null
        store.currentFirstName = null
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
            open: false,
        }
    },
    methods: {
        signout() {
            signOut(auth)
                .then(() => {
                    this.$router.replace({ name: 'Login' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        toggle() {
            this.open = !this.open
        },
    },
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
