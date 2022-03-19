<template>
    <div
        class="bg-white rounded-lg p-6 md:mx-10 lg:mx-auto shadow-2xl lg:w-[600px] h-[400px] m-10 mt-[25px] grid justify-center sm:mx-auto sm:h-[600px] overflow-auto"
    >
        <h2 class="mt-6 text-3xl font-bold text-black-900 pb-7">My Cars</h2>
        <hr class="w-2/3 mx-auto" />

        <div class="mt-4 grid grid-cols-2 gap-6 justify-items-center">
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
            <myCar />
        </div>
    </div>
</template>

<script>
import myCar from '../components/myCar.vue'

export default {
    components: {
        myCar,
    },
}
</script>
