<template>
    <backButton />
    <div
        class="mx-auto w-11/12 sm:w-5/6 lg:w-8/12 h-[760px] shadow-2xl rounded-xl"
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
                    :min-date="new Date()"
                    :max-date="dateMax"
                    :disabled-dates="{ weekdays: [1, 7] }"
                    :valid-hours="{ min: 8, max: 18 }"
                    :first-day-of-week="2"
                    :minute-increment="30"
                    color="red"
                />
            </div>

            <button
                class="bg-[#E55050] text-white p-4 w-full rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                type="button"
                @click="next"
            >
                Next
            </button>
        </div>
    </div>
</template>
<script>
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'
import backButton from '../components/backButton.vue'

export default {
    components: {
        backButton,
        // Calendar,
        DatePicker,
    },
    data() {
        return {
            date: new Date().setHours(12, 0, 0),
            dateMax: new Date().setFullYear(
                this.setYear(),
                this.setMonth(),
                this.setDay()
            ),
        }
    },
    methods: {
        setDay() {
            const now = new Date()
            const dayNumber = now.getDate()
            return dayNumber + 14
        },
        setMonth() {
            const now = new Date()
            const month = now.getMonth()
            return month
        },
        setYear() {
            const now = new Date()
            const year = now.getFullYear()
            return year
        },
    },
}
</script>

<style></style>
