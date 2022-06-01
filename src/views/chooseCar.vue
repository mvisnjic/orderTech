<template>
    <backButton :class="[isOpen ? 'hidden' : '']" />
    <div
        class="mx-auto w-11/12 sm:w-5/6 lg:w-8/12 h-[760px] shadow-2xl rounded-xl"
        :class="[isOpen ? 'hidden' : '']"
    >
        <Listbox as="div" v-model="selected">
            <ListboxLabel
                class="flex justify-center mx-auto mt-6 pt-6 sm:mt-6 lg:mt-6 lg:pt-6 w-[490px] text-center text-2xl pl-12 pr-44 sm:pr-16 sm:pl-0 md:px-12 sm:text-3xl font-bold text-black-900"
            >
                Select a car for technical inspection
            </ListboxLabel>
            <div class="mt-8 sm:mt-12 relative">
                <ListboxButton
                    v-slot="{ open }"
                    class="relative w-[320px] h-[48px] sm:w-[500px] bg-white border border-gray-300 rounded-full shadow-md pl-3 py-2 text-left sm:text-md"
                >
                    <img
                        src="/src/assets/down-arrow.svg"
                        class="absolute flex-initial h-[25px] ml-[265px] sm:ml-[445px] mt-0"
                        :class="[open ? 'rotate-180' : '']"
                    />
                    <span v-if="selected" class="ml-3"
                        >{{ selected.carBrand }} {{ selected.carModel }}
                        {{ selected.registration }}</span
                    >
                    <span
                        v-if="selected == ''"
                        class="text-left sm:text-md text-gray-400"
                        >Select a car</span
                    >
                </ListboxButton>
                <ListboxOptions
                    class="z-10 mt-1 mx-auto w-[300px] sm:w-[480px] bg-white shadow-lg max-h-58 rounded-md py-1 text-base sm:text-md"
                >
                    <ListboxOption
                        v-for="car in cars"
                        :key="car.id"
                        :value="car"
                        v-slot="{ active, selected }"
                    >
                        <li
                            :class="[
                                active
                                    ? 'text-white bg-[#E55050]'
                                    : 'text-gray-900',
                                ' relative py-3 pl-3 border top-0 bottom-1.5',
                            ]"
                        >
                            <div class="flex items-center">
                                <span
                                    :class="[
                                        selected ? 'font-bold' : 'font-normal',
                                        'ml-3 cursor-default',
                                    ]"
                                >
                                    {{ car.carBrand }} {{ car.carModel }}
                                    {{ car.registration }}
                                </span>
                            </div>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </div>

            <div class="mt-8 sm:mt-10">
                <router-link to="/chooseStation">
                    <button
                        @click="selectCar()"
                        :disabled="selected == ''"
                        class="bg-[#E55050] text-white p-3 w-[150px] rounded-full tracking-wide font-semibold font-display hover:bg-red-600 px-12 py-4"
                    >
                        Next
                    </button>
                </router-link>
                <div
                    class="mt-12 text-sm font-display font-semibold text-black-700 text-center"
                >
                    Don't have a car?

                    <button
                        @click="isOpen = true"
                        class="cursor-pointer text-[#E55050] font-bold hover:text-red-800"
                    >
                        Add car
                    </button>
                </div>
            </div>
        </Listbox>

        <!-- <div class="p-[60px]">
        {{ stations }}
    </div> -->
    </div>
    <popUpCar :open="isOpen" @close="isOpen = !isOpen" />
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import {
    collection,
    getDocs,
    query,
    setDoc,
    doc,
    onSnapshot,
} from 'firebase/firestore'
import { store } from '../store'
import backButton from '../components/backButton.vue'
import popUpCar from '../components/popUpCar.vue'

import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue'

export default {
    components: {
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        backButton,
        popUpCar,
    },
    data() {
        return {
            cars: [],
        }
    },
    setup() {
        async function getCars() {
            /*  const querySnapshot = await getDocs(
                collection(db, `users/${store.currentUid}/cars`)
            )
            querySnapshot.forEach((doc) => {
                this.cars.push(doc.data())
                //console.log(this.stations)
            })*/

            const q = query(collection(db, `users/${store.currentUid}/cars`))
            onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    this.cars.push(change.doc.data())
                })
            })
        }
        const selected = ref([])
        const isOpen = ref(false)
        return {
            getCars,
            selected,
            isOpen,
        }
    },
    methods: {
        async selectCar() {
            localStorage.setItem(
                'selectedRegistration',
                this.selected.registration
            )
            const q = query(collection(db, 'users'))
            const querySnapshot = await getDocs(q)
            querySnapshot.docs.map(async () => {
                await setDoc(
                    doc(
                        db,
                        `users/${store.currentUid}/orders/${this.selected.registration}`
                    ),
                    {
                        car: this.selected,
                    }
                )
            })
        },
    },
    mounted() {
        this.getCars()
    },
}
</script>
