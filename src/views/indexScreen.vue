<template>
    <div class="grid grid-cols-3">
        <div class="grid content-center justify-items-center">
            <router-link
                to="/chooseStation"
                class="bg-[#E55050] text-white p-4 w-3/6 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
            >
                Order Now
            </router-link>
        </div>
        <div>
            <img class="mx-auto" alt="Vue logo" src="../assets/logo.gif" />
            <div class="font-bold text-2xl">
                <!-- <p>Naručite tehnički pregled Vašeg vozila!</p> -->
                <!-- <p>Lako i besplatno u samo nekoliko koraka!</p> -->
                <p>Order a technical inspection for your vehicle!</p>
                <p>Easy and free in just a few steps!</p>
            </div>
        </div>
        <div class="grid content-center justify-items-center">
            <div
                class="bg-[#E55050] text-white p-4 w-3/6 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
            >
                Checkout
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeScreen',
}
</script>
