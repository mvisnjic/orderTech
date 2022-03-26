<template>
    <div
        class="bg-white rounded-lg p-6 md:mx-10 lg:mx-auto shadow-2xl lg:w-3/6 h-[400px] m-10 mt-[25px] grid justify-center sm:mx-auto sm:h-[600px] overflow-auto"
    >
        <h2 class="mt-6 text-3xl font-bold text-black-900 pb-7">My Cars</h2>
        <hr class="w-2/3 mx-auto" />

        <div
            class="mt-4 grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        >
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
