<template>
    <div
        class="rounded-3xl bg-[#E55050] h-[150px] w-[250px] md:w-[230px] lg:w-[250px] grid grid-rows-2 items-center opacity-90 hover:opacity-100 transition"
    >
        <div class="flex">
            <router-link
                :to="{
                    name: 'deleteCar',
                    params: {
                        carBrand: carBrand,
                        carModel: carModel,
                        identification: identification,
                        registration: registration,
                    },
                }"
            >
                <img
                    src="../assets/delete.png"
                    class="absolute flex mt-11 pl-2 h-[28px] hover:h-[30px]"
                />
            </router-link>

            <img
                src="../assets/carIcon.png"
                alt="car icon"
                class="w-[120px] mx-auto mt-6"
            />
        </div>
        <div class="font-bold">
            <p>{{ carBrand }} {{ carModel }}</p>
            <p>{{ registration }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myCar',
    props: ['carModel', 'carBrand', 'identification', 'registration'],
}
</script>
