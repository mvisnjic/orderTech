<template>
    <router-link
        :to="{
            name: 'aboutCar',
            params: {
                carBrand: carBrand,
                carModel: carModel,
                identification: identification,
                registration: registration,
            },
        }"
    >
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
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'myCar',
    props: ['carModel', 'carBrand', 'identification', 'registration'],
}
</script>
