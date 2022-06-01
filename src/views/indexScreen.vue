<template>
    <div class="grid grid-rows-1 lg:grid-cols-3 px-4 lg:px-0">
        <div
            class="grid content-center justify-items-center pt-16 pb-8 md:pt-16 md:pb-8 lg:pt-0 lg:pb-0"
        >
            <router-link
                to="/chooseCar"
                class="bg-[#E55050] text-white p-4 w-3/6 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
            >
                Order Now
            </router-link>
        </div>
        <div class="order-first lg:order-none">
            <img class="mx-auto" alt="Vue logo" src="../assets/logo.gif" />
            <div class="font-bold text-xl lg:text-2xl">
                <!-- <p>Naručite tehnički pregled Vašeg vozila!</p> -->
                <!-- <p>Lako i besplatno u samo nekoliko koraka!</p> -->
                <p>Order a technical inspection for your vehicle!</p>
                <p>Easy and free in just a few steps!</p>
            </div>
        </div>
        <div class="grid content-center justify-items-center">
            <router-link
                class="bg-[#E55050] text-white p-4 w-3/6 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                to="/checkout"
            >
                Checkout
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeScreen',
}
</script>
