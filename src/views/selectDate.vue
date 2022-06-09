<template>
    <backButton />
    <div
        class="flex flex-col items-center mx-auto w-11/12 sm:w-5/6 lg:w-8/12 h-[760px] shadow-2xl rounded-xl"
    >
        <div
            class="mt-6 pt-6 sm:mt-6 lg:mt-6 lg:pt-6 lg:mx-auto md:mx-auto w-[490px] text-center text-2xl px-12 sm:text-3xl font-bold text-black-900"
        >
            <h1>Select a date for technical inspection</h1>
        </div>
        <div class="mt-8 sm:mt-12 lg:grid lg:justify-center">
            <!-- <p>{{ dateTime }}</p> -->
            <div class="p-10 w-2/3">
                <!-- <Calendar /> -->
                <DatePicker
                    v-model="date"
                    mode="dateTime"
                    is24hr
                    :min-date="dateMin"
                    :max-date="dateMax"
                    :disabled-dates="{ weekdays: [1, 8] }"
                    :valid-hours="{ min: 8, max: 18 }"
                    :first-day-of-week="2"
                    :minute-increment="30"
                    color="red"
                />
            </div>
            <div>
                <button
                    class="bg-[#E55050] text-white p-4 w-[150px] rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                    type="button"
                    @click.prevent="order"
                >
                    Order
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'
import { db } from '../firebase'
import backButton from '../components/backButton.vue'
import { doc, updateDoc } from 'firebase/firestore'
import { store } from '../store'
import emailjs from '@emailjs/browser'

const currDay = new Date().getDate() + 1

export default {
    components: {
        backButton,
        DatePicker,
    },
    data() {
        return {
            date: new Date().setHours(0, 0, 0),
            dateMin: new Date().setDate(currDay),
            dateMax: new Date().setFullYear(
                this.setYear(),
                this.setMonth(),
                this.setDay()
            ),
        }
    },
    methods: {
        setDay() {
            const dayNumber = new Date().getDate()
            return dayNumber + 21
        },
        setMonth() {
            const month = new Date().getMonth()
            return month
        },
        setYear() {
            const year = new Date().getFullYear()
            return year
        },
        getSelectedDate(date) {
            date = this.date.toString().split(' ')
            return date[2] + ' ' + date[1] + ' ' + date[3]
        },
        getSelectedTime(time) {
            time = this.date.toString().split(' ')
            return time[4]
        },
        async order() {
            const selectedRegistration = localStorage.getItem(
                'selectedRegistration'
            )
            const selectedStation = localStorage.getItem('selectedStation')
            await updateDoc(
                doc(
                    db,
                    `users/${store.currentUid}/orders/${selectedRegistration}`
                ),
                {
                    date: this.getSelectedDate(this.date),
                    time: this.getSelectedTime(this.date),
                }
            )
            const templateParams = {
                subject: 'Order successful',
                name: store.currentFirstName,
                email: store.currentUserEmail,
                notes: `Order successful for car:`,
                reg: `Car registration: ${selectedRegistration}`,
                station: `Station: ${selectedStation}`,
                date: `Date: ${this.getSelectedDate(this.date)}`,
                time: `Time: ${this.getSelectedTime(this.date)}`,
            }
            await emailjs
                .send(
                    'service_h0gze55',
                    'template_2ciky8m',
                    templateParams,
                    'user_iIvXkBLH666mYU0g9CoKF'
                )
                .then(
                    (res) => {
                        console.log('SUCCESS!', res.status, res.text)
                    },
                    (e) => {
                        alert('Failed! E-mail confirm not sent!')
                    }
                )

            await this.$router.replace('/successorder')
            localStorage.removeItem('selectedRegistration')
            localStorage.removeItem('selectedStation')
            setTimeout(() => {
                this.$router.replace('/')
            }, '2000')
        },
    },
}
</script>
