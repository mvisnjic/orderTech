<template>
    <backButton />
    <div
        class="flex flex-col items-center mx-auto w-11/12 sm:w-5/6 lg:w-8/12 h-[760px] shadow-2xl rounded-xl"
    >
        <div
            class="my-6 pt-6 sm:my-6 lg:my-6 lg:pt-6 lg:mx-auto md:mx-auto w-[490px] text-center text-2xl px-12 sm:text-3xl font-bold text-black-900"
        >
            <h1>Check-out Order</h1>
        </div>
        <div v-if="error" class="italic">{{ error }}</div>
        <div class="mt-6 overflow-auto" v-else-if="data.length > 0">
            <checkoutCar
                v-for="car in data"
                :key="car.car.registration"
                :carBrand="car.car.carBrand"
                :carModel="car.car.carModel"
                :identification="car.car.identification"
                :registration="car.car.registration"
                :date="car.date"
                :time="car.time"
                :stationName="car.station.stationName"
            />
        </div>
        <div v-else class="italic">
            <img src="/src/assets/loading.gif" class="h-16" />
        </div>

        <div class="mt-6">
            <p class="text-lg">Enter you registration for check-out:</p>
            <br />
            <input
                type="text"
                v-model="selectedRegistration"
                v-on:keyup.enter="deleteOrder"
                :disabled="isActive"
                class="w-full p-2 border-[#E55050] border-b"
                maxlength="10"
            />
        </div>
        <div class="lg:grid mt-6">
            <div></div>
            <button
                class="bg-[#E55050] text-white p-4 w-[150px] rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                type="button"
                @click="deleteOrder"
                :disabled="isActive"
            >
                Check-out
            </button>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'
import backButton from '../components/backButton.vue'
import checkoutCar from '../components/checkoutCar.vue'
import {
    collection,
    doc,
    deleteDoc,
    onSnapshot,
    query,
} from 'firebase/firestore'
import { store } from '../store'
import emailjs from '@emailjs/browser'

export default {
    components: {
        backButton,
        checkoutCar,
    },
    data() {
        return {
            selectedRegistration: '',
            data: [],
            dataRegistrations: [],
            error: null,
            isActive: false,
        }
    },
    beforeMount() {
        setTimeout(() => {
            this.checkForOrders()
        }, 1000)
    },
    methods: {
        checkRegistration(currentRegistration) {
            return new Promise((resolve, reject) => {
                const registrationFounded = this.dataRegistrations.filter(
                    (registration) => registration === currentRegistration
                )
                if (registrationFounded.length > 0) {
                    resolve(currentRegistration)
                } else {
                    this.isActive = false
                    alert('Wrong license plate number. Try again!')
                    reject('Wrong license plate number. Try again!')
                }
            })
        },
        checkForOrders() {
            const q = query(collection(db, `users/${store.currentUid}/orders`))
            onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.data.push(doc.data())
                    this.dataRegistrations.push(doc.id)
                })
                if (this.data.length === 0) {
                    this.error = 'No active orders.'
                }
            })
        },
        async deleteOrder() {
            this.isActive = true
            await this.checkRegistration(
                this.selectedRegistration.toUpperCase()
            )
            await deleteDoc(
                doc(
                    db,
                    `users/${
                        store.currentUid
                    }/orders/${this.selectedRegistration.toUpperCase()}`
                )
            )
            const templateParams = {
                subject: 'Check-out successful',
                name: store.currentFirstName,
                email: store.currentUserEmail,
                notes: `Check-out successful for car with a plate:`,
                reg: `Car plate: ${this.selectedRegistration.toUpperCase()}`,
            }
            await emailjs
                .send(
                    'service_h0gze55',
                    'template_2ciky8m',
                    templateParams,
                    'user_iIvXkBLH666mYU0g9CoKF'
                )
                .then(
                    function (response) {
                        console.log('SUCCESS!', response.status, response.text)
                    },
                    function (error) {
                        console.log('FAILED...', error)
                        alert('Failed! E-mail confirm not sent!')
                    }
                )
            await this.$router.replace('/successcheckout')
            this.isActive = false
            setTimeout(() => {
                this.$router.replace('/')
            }, '2000')
        },
    },
}
</script>
