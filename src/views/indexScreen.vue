<template>
    <div
        class="grid grid-rows-1 lg:grid-cols-3 items-center px-4 lg:px-0 w-full mt-12"
    >
        <!--bg-[url('src/assets/background2.png')] bg-cover bg-bottom bg-blend-soft-light bg-[#DCCDCD]-->

        <div
            class="flex flex-col items-left font-bold text-center md:text-left mt-12 px-8 md:pl-24 md:pr-24 gap-y-5 w-full"
        >
            <!-- <p>Naručite tehnički pregled Vašeg vozila!</p> -->
            <!-- <p>Lako i besplatno u samo nekoliko koraka!</p> -->
            <p class="text-5xl">
                Order a technical inspection for your vehicle!
            </p>
            <p class="text-3xl">Easy and free in just a few steps!</p>
            <div
                class="flex flex-col xl:flex-row items-left w-full gap-8 mt-12 items-center"
            >
                <div class="flex content-center text-center">
                    <router-link
                        to="/chooseCar"
                        class="bg-[#E55050] text-white p-4 w-56 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                    >
                        Order Now
                    </router-link>
                </div>
                <div class="flex content-center text-center">
                    <router-link
                        class="bg-[#E55050] text-white p-4 w-56 rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                        to="/checkout"
                    >
                        Checkout
                    </router-link>
                </div>
            </div>
        </div>

        <div class="flex mx-auto order-first lg:order-none">
            <img
                class="flex self-end mx-auto w-[300px] h-[100%] md:w-[600px] md:h-[100%] ml-0 md:ml-8 lg:ml-12"
                alt="Vue logo"
                src="../assets/inspection.png"
            />
        </div>
        <div class="flex flex-col justify-center">
            <p class="text-3xl font-bold">Active orders</p>
            <div class="flex flex-col justify-top mt-4" v-if="isLoading">
                <activeOrders
                    v-for="order in orders"
                    :key="order.id"
                    :registration="order.car.registration"
                    :time="order.time"
                    :station="order.station.stationName"
                />
            </div>

            <div class="flex justify-center pt-8 italic" v-else-if="error">
                {{ error }}
            </div>
            <div class="flex justify-center pt-8" v-else>
                <img src="/src/assets/loading.gif" class="h-16" />
            </div>
        </div>
    </div>
    <div class="pt-[60px] md:pt-[150px]">
        <p class="text-3xl font-bold text-[#E55050]">
            Vehicle technical inspections
        </p>
        <stationCard :stations="stations" />
    </div>

    <div
        class="flex flex-row w-full h-[90px] bg-[#E55050] px-8 md:px-44 bottom-0"
    >
        <div class="flex flex-row gap-2 md:gap-8 place-content-between w-full">
            <p class="text-lg text-white font-bold py-2">orderTech</p>
            <div class="flex flex-col py-3 gap-1 text-right">
                <p
                    class="text-md text-white border-none md:border-b md:border-white mb-0 md:pb-2"
                >
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
import activeOrders from '/src/components/activeOrders.vue'
import { db } from '../firebase'
import { collection, getDocs, query, onSnapshot } from 'firebase/firestore'
import { store } from '../store'

export default {
    name: 'HomeScreen',
    components: {
        stationCard,
        activeOrders,
    },
    data() {
        return {
            orders: [],
            isActive: true,
            isLoading: false,
            error: null,
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
    methods: {
        getOrders() {
            const q = query(collection(db, `users/${store.currentUid}/orders`))
            onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    this.orders.push(change.doc.data())
                    this.isLoading = true
                })
                if (this.orders.length < 1) {
                    this.error = 'No active orders.'
                }
            })
            this.isLoading = false
        },
    },
    mounted() {
        setTimeout(() => {
            this.getOrders()
        }, 1000)
    },
}
</script>
