<template>
    <div class="flex justify-center">
        <backButton />
        <div class="absolute overflow-auto">
            <h2 class="mt-16 text-3xl font-bold text-black-900 pb-7">
                My Cars
            </h2>
            <hr class="w-2/3 mx-auto" />

            <div
                class="mt-8 grid grid-cols-1 gap-6 justify-center md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
                <addNewCar />
                <myCar />
                <myCar />
                <myCar />
                <myCar />
                <myCar />
                <myCar />
            </div>
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
