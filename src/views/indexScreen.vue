<template>
    <div class="grid grid-rows-1 lg:grid-cols-3 px-4 lg:px-0 w-full">
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
    <div class="pt-[150px]">
        <p class="text-3xl font-bold text-[#E55050]">
            Vehicle technical inspections
        </p>
        <stationCard :stations="stations" />
    </div>

    <div
        class="flex flex-row bottom-[0px] w-full h-[90px] bg-[#E55050] px-16 md:px-44"
    >
        <div class="flex flex-row gap-8 place-content-between w-full">
            <p class="text-lg text-white font-bold py-2">orderTech</p>
            <div class="flex flex-col py-3 gap-3 text-right">
                <p class="text-md text-white border-b border-white pb-2">
                    Contact: <b> 0951234567 </b>
                </p>
                <a
                    href="mailto:ordertech396@gmail.com"
                    class="text-md text-white"
                >
                    Email: <b>ordertech396@gmail.com</b>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import stationCard from '/src/components/stationCard.vue'
export default {
    name: 'HomeScreen',
    components: {
        stationCard,
    },
    data() {
        return {
            stations: [
                {
                    title: 'Technical inspection Umag',
                    img: 'stp_umag',
                    button: 'https://m.hak.hr/stp.asp?Mjesto=52470',
                },
                {
                    title: 'Technical inspection Buzet',
                    img: 'stp_buzet',
                    button: 'https://www.tvrtke.hr/buzet/tehnicki-pregled/centar-za-vozila-hrvatske-stp-buzet',
                },
                {
                    title: 'Technical inspection Poreč',
                    img: 'stp_poreč',
                    button: 'https://www.tvrtke.hr/porec/tehnicki-pregled/centar-za-vozila-hrvatske-stp-porec',
                },
                {
                    title: 'Technical inspection Rovinj',
                    img: 'stp_rovinj',
                    button: 'https://www.tehnicki-pregledi.hr/lokacije-stanica/',
                },
                {
                    title: 'Technical inspection Bibići',
                    img: 'stp_bibici',
                    button: 'https://www.tvrtke.hr/svetvincenat/tehnicki-pregled/centar-za-vozila-hrvatske-stp-centar-bibici',
                },
                {
                    title: 'Technical inspection Labin',
                    img: 'stp_labin',
                    button: 'https://www.moja-djelatnost.hr/tehnicki-pregled-vozila-i-servis-labin/istratrans-stp-doo/MMxJIT7v',
                },
                {
                    title: 'Technical inspection Valtura',
                    img: 'stp_valtura',
                    button: 'https://www.eistra.info/imenik/stanica_za_tehnicki_pregled_vozila',
                },
                {
                    title: 'Technical inspection Pazin',
                    img: 'stp_pazin',
                    button: 'http://www.akpazin.hr/djelatnosti',
                },
                {
                    title: 'Technical inspection Europula',
                    img: 'stp_pula',
                    button: 'https://www.agramtis.hr/stanice/europula/',
                },
            ],
        }
    },
}
</script>
