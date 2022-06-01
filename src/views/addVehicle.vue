<template>
    <backButton :class="[isOpen ? 'hidden' : '']" />
    <div
        class="mx-auto w-11/12 sm:w-5/6 lg:w-10/12 xl:w-8/12 h-[760px] shadow-2xl rounded-xl overflow-auto mt-6"
        :class="[isOpen ? 'hidden' : '']"
    >
        <div class="flex flex-col items-center">
            <h2 class="mt-6 text-3xl font-bold text-black-900 pb-7">My Cars</h2>

            <div
                class="overflow-auto mt-1 sm:my-8 grid grid-cols-1 gap-6 justify-center md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
                <button @click="isOpen = true"><addNewCar /></button>
                <myCar
                    v-for="car in cars"
                    :key="car.id"
                    :carBrand="car.carBrand"
                    :carModel="car.carModel"
                    :identification="car.identificationNumber"
                    :registration="car.registration"
                />
            </div>
        </div>
    </div>

    <popUpCar :open="isOpen" @close="isOpen = !isOpen" />
</template>

<script>
import myCar from '../components/myCar.vue'
import addNewCar from '../components/addNewCar.vue'
import backButton from '../components/backButton.vue'
import popUpCar from '../components/popUpCar.vue'

import { ref } from 'vue'
import { db } from '../firebase'
import { store } from '../store'
import { collection, query, onSnapshot } from 'firebase/firestore'

export default {
    components: {
        myCar,
        addNewCar,
        backButton,
        popUpCar,
    },
    setup() {
        const isOpen = ref(false)
        return { isOpen }
    },
    data() {
        return {
            cars: [],
        }
    },
    methods: {
        async getCars() {
            const q = query(collection(db, `users/${store.currentUid}/cars`))
            onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    this.cars.push(change.doc.data())
                })
            })
        },
    },
    mounted() {
        this.getCars()
    },
}
</script>
