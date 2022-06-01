<template>
    <div
        class="rounded-3xl text-white bg-[#E55050] h-[120px] w-[330px] md:w-[350px] lg:w-[400px] flex flex-col justify-evenly items-center opacity-90 transition mb-2"
    >
        <div class="flex flex-row space-x-4">
            <p>{{ carBrand }} {{ carModel }}</p>
            <p>{{ registration }}</p>
        </div>
        <div>
            <p>{{ stationName }}</p>
        </div>
        <div>
            <p>{{ date }}</p>
            <p>{{ time }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'checkoutCar',
    props: [
        'carModel',
        'carBrand',
        'registration',
        'date',
        'time',
        'stationName',
    ],
}
</script>
