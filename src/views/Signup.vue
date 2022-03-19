<template>
    <div class="flex items-center justify-center py-14 px-5 sm:px-7 lg:px-9">
        <div class="max-w-md w-full space-y-8 px-4 sm:px-0">
            <h2 class="mt-6 text-cetner text-3xl font-bold text-black-900">
                Sign up to your account
            </h2>
            <form class="mt-12">
                <div class="flex flex-row space-x-9">
                    <div class="grid justify-items-start my-8">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            First name
                        </div>
                        <input
                            class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                            type="text"
                            v-model="firstName"
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div class="grid justify-items-start my-8">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Last name
                        </div>
                        <input
                            class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                            type="text"
                            v-model="lastName"
                            placeholder="Last name"
                            required
                        />
                    </div>
                </div>
                <div class="grid justify-items-start">
                    <div
                        class="text-sm font-bold text-black-900 tracking-wide pb-[5px]"
                    >
                        Email Adress
                    </div>
                    <input
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="email"
                        v-model="username"
                        placeholder="name@gmail.com"
                        required
                    />
                </div>
                <div class="mt-8">
                    <div class="flex justify-between items-center">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Password
                        </div>
                    </div>
                    <input
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="password"
                        v-model="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div class="mt-8">
                    <div class="flex justify-between items-center">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Retype password
                        </div>
                    </div>
                    <input
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="password"
                        v-model="passwordRepeat"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div class="mt-10">
                    <button
                        type="button"
                        @click="signup"
                        class="bg-[#E55050] text-white p-4 w-full rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                    >
                        Sign up
                    </button>
                </div>
            </form>
            <div
                class="mt-12 text-sm font-display font-semibold text-black-700 text-center"
            >
                Already have an account?
                <router-link to="/login"
                    ><a class="cursor-pointer text-[#E55050] hover:text-red-800"
                        >Log in</a
                    ></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import { firebase }  from '../firebase'

export default {
    name: 'Signup',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            passwordRepeat: '',
        }
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(function() {
                console.log('Uspješna registracija!');
            })
            .catch(function(error) {
                console.error('Došlo je do pogreške', error);
            })
        },
    },
}
</script>
