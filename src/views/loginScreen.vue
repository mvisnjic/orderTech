<template>
    <div class="flex items-center justify-center py-14 sm:px-7 lg:px-9">
        <div class="max-w-md w-full space-y-8 px-4 sm:px-0">
            <h2 class="mt-6 text-cetner text-3xl font-bold text-black-900 pb-7">
                Log in to your account
            </h2>
            <loading
                :active="isLoading"
                :is-full-page="fullPage"
                :loader="loader"
            />

            <form class="mt-12">
                <div class="grid justify-items-start">
                    <div
                        class="text-sm font-bold text-black-900 tracking-wide pb-[5px]"
                    >
                        Email Address
                    </div>
                    <input
                        v-model="username"
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="email"
                        placeholder="name@gmail.com"
                        required
                        autocomplete="username"
                    />
                </div>
                <div class="mt-8">
                    <div class="flex justify-between items-center">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Password
                        </div>
                        <div>
                            <a
                                class="text-xs font-display font-semibold text-[#E55050] hover:text-red-800 cursor-pointer"
                                >Forgot Password?</a
                            >
                        </div>
                    </div>
                    <input
                        v-model="password"
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="password"
                        placeholder="Enter your password"
                        required
                        v-on:keyup.enter="login"
                        autocomplete="current-password"
                    />
                    <span class="text-[#E55050]" v-if="password == ''">{{
                        errorMsg
                    }}</span>
                </div>
                <div class="mt-10">
                    <button
                        class="bg-[#E55050] text-white p-4 w-full rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                        type="button"
                        @click="login()"
                        :disabled="username && password === ''"
                    >
                        Log in
                    </button>
                </div>
            </form>
            <div
                class="mt-12 text-sm font-display font-semibold text-black-700 text-center"
            >
                Don't have an account?
                <router-link to="/signup"
                    ><a class="cursor-pointer text-[#E55050] hover:text-red-800"
                        >Sign up</a
                    ></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import { firebase } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { store } from '../store'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    name: 'loginScreen',
    data() {
        return {
            username: '',
            password: '',
            errorMsg: null,
            isLoading: false,
            fullPage: true,
            loader: 'dots',
        }
    },
    components: {
        Loading,
    },
    methods: {
        login() {
            console.log('logging ' + this.username)
            const auth = getAuth()
            signInWithEmailAndPassword(auth, this.username, this.password)
                .then(() => {
                    //changing routes
                    this.$router.replace({ path: '/' })
                    console.log(`Hello ${store.currentFirstName}!`)
                    this.isLoading = false
                })
                .catch((e) => {
                    console.log('Error:', e.message)
                    // alert(e.message)
                    this.password = ''
                    this.errorMsg = 'Error: Wrong password or email!'
                })
            this.isLoading = true
        },
    },
}
</script>
