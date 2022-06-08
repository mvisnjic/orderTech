<template>
    <div
        class="mx-auto flex mt-12 w-[360px] h-[650px] sm:w-[600px] sm:h-[600px] lg:w-[950px] lg:h-[600px] rounded-3xl shadow-2xl"
    >
        <div class="mx-auto mt-8 max-w-md w-full space-y-8 px-4 sm:px-0">
            <h2 class="mt-6 text-cetner text-3xl font-bold text-[#E55050] pb-7">
                Do you want to delete a car?
            </h2>
            <div class="mt-12">
                <div class="grid justify-items-center">
                    <div
                        class="text-2xl font-bold text-black-900 border-b w-full pb-4"
                    >
                        {{ carBrand }} {{ carModel }}
                    </div>
                </div>
                <div class="flex mt-8">
                    <div class="text-md text-black-900 border-b w-full pb-4">
                        IDENTIFICATION NUMBER: <b>{{ identification }}</b>
                    </div>
                </div>
                <div class="grid justify-items-start my-8">
                    <div class="text-md text-black-900 border-b w-full pb-4">
                        REGISTRATION: <b>{{ registration }}</b>
                    </div>
                </div>

                <div class="mt-8">
                    <button
                        class="bg-[#E55050] text-white p-4 w-32 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                        type="button"
                        @click="deleteCar(goBack())"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <div class="absolute m-4 cursor-pointer">
            <button type="button" @click="goBack()">
                <img src="../assets/close.png" class="h-[25px]" />
            </button>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import { store } from '../store'
export default {
    name: 'deleteCar',
    props: ['carModel', 'carBrand', 'identification', 'registration'],

    methods: {
        async deleteCar() {
            await deleteDoc(
                doc(db, `users/${store.currentUid}/cars/${this.identification}`)
            )
        },
        goBack() {
            return this.$router.go(-1)
        },
    },
}
</script>
