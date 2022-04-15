<template>
    <backButton />
    <div class="flex flex-col items-center">
        <h2 class="mt-16 text-3xl font-bold text-black-900 pb-7">My Cars</h2>

        <div
            class="overflow-auto mt-1 sm:mt-8 grid grid-cols-1 gap-6 justify-center md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
            <addNewCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
        </div>
    </div>
</template>

<script>
import myCar from '../components/myCar.vue'
import addNewCar from '../components/addNewCar.vue'
import backButton from '../components/backButton.vue'
export default {
    components: {
        myCar,
        addNewCar,
        backButton,
    },
}
</script>
