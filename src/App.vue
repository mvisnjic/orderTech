<template>
    <div id="app" class="h-screen">
        <div
            class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 items-center pt-4 bg-[#FCFCFF]"
            id="nav"
        >
            <button
                data-collapse-toggle="mobile-menu"
                type="button"
                class="block grid justify-self-end sm:justify-self-center w-[50px] p-3 -mt-3 ml-6 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <div class="pl-36 sm:pl-16">
                <router-link to="/" class="sm:px-12">
                    <img src="./assets/logo.png" />
                </router-link>
            </div>

            <div
                class="hidden text-[20px] md:flex md:flex-row justify-center space-x-5"
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
                class="font-bold text-xl -mt-3 md:mt-0"
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
