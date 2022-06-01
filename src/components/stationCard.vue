<template>
    <div
        class="grid lg:grid-cols-2 lg:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 px-[20px] sm:px-[25px] md:px-[50px] lg:px-[70px] xl:px-[100px] pb-[100px] w-full bg-[#fcfcff]"
    >
        <div
            class="flex flex-col mx-auto md:mx-auto items-top w-[350px] h-[480px] md:w-[400px] md:h-[450px] m-8 md:m-16 rounded-3xl transition-all duration-500 ease-out shadow-[0_35px_77px_-15px_rgba(0,0,0,0.44)] hover:shadow-[0_35px_77px_-17px_rgba(0,0,0,0.64)] hover:scale-[1.05]"
            v-for="(station, i) in stations"
            :key="i"
        >
            <div>
                <img
                    :src="`/src/assets/${station.img}.jpg`"
                    class="w-full h-[240px]"
                />
            </div>
            <div class="flex justify-end p-6 text-2xl font-bold text-black">
                {{ station.title }}
            </div>
            <a
                :href="` ${station.button} `"
                target="_blank"
                class="flex justify-end mt-14 mr-6"
            >
                <button
                    class="bg-[#E55050] text-md text-white p-4 w-3/6 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                >
                    SEE MORE
                </button>
            </a>
        </div>
    </div>
</template>

<script>
import stationCard from '/src/components/stationCard.vue'
export default {
    name: 'stationCard',
    props: {
        stations: {
            Type: Array,
        },
    },
}
</script>
