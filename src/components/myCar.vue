<template>
    <div
        class="rounded-3xl bg-[#E55050] h-[150px] w-[250px] md:w-[230px] lg:w-[250px] grid grid-rows-2 items-center opacity-90 hover:opacity-100 transition"
    >
        <div>
            <img
                src="../assets/carIcon.png"
                alt="car icon"
                class="w-[120px] mx-auto mt-2"
            />
        </div>
        <div class="font-bold">
            <p>{{ carBrand }} {{ carModel }}</p>
            <p>{{ registration }}</p>
            <p>{{ identification }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myCar',
    props: ['carModel', 'carBrand', 'identification', 'registration'],
}
</script>
