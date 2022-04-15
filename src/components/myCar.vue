<template>
    <div
        class="rounded-3xl bg-[#E55050] h-[150px] w-[250px] md:w-[230px] lg:w-[250px] grid grid-rows-2 items-center opacity-90 hover:opacity-100"
    >
        <div>
            <img
                src="../assets/carIcon.png"
                alt="car icon"
                class="w-[100px] mx-auto"
            />
        </div>
        <div class="font-bold">
            <p>My car name</p>
            <p>PU533SM</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myCar',
}
</script>
