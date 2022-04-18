<template>
    <backButton />
    <Listbox as="div" v-model="selected">
        <ListboxLabel
            class="flex justify-center mx-auto mt-24 sm:mt-16 lg:mt-20 w-[490px] text-center text-2xl px-12 sm:text-3xl font-bold text-black-900"
        >
            Select a station for technical inspection
        </ListboxLabel>
        <div class="mt-8 sm:mt-12 relative">
            <ListboxButton
                v-slot="{ open }"
                class="relative w-[400px] h-[48px] sm:w-[500px] bg-white border border-gray-300 rounded-full shadow-md pl-3 py-2 text-left sm:text-md"
            >
                <img
                    src="/src/assets/down-arrow.svg"
                    class="absolute flex-initial h-[25px] ml-[345px] sm:ml-[445px] mt-0"
                    :class="[open ? 'rotate-180' : '']"
                />
                <span v-if="selected" class="ml-3">{{
                    selected.stationName
                }}</span>
                <span
                    v-if="selected == ''"
                    class="text-left sm:text-md text-gray-400"
                    >Select station</span
                >
            </ListboxButton>
            <ListboxOptions
                class="z-10 mt-1 mx-auto w-[380px] sm:w-[480px] bg-white shadow-lg max-h-58 rounded-md py-1 text-base sm:text-md"
            >
                <ListboxOption
                    v-for="station in stations"
                    :key="station.id"
                    :value="station"
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
                                {{ station.stationName }}
                            </span>
                        </div>
                    </li>
                </ListboxOption>
            </ListboxOptions>
        </div>
    </Listbox>

    <div class="mt-8 sm:mt-10">
        <button
            type="button"
            @click="selectStaton()"
            class="bg-[#E55050] text-white p-3 w-[150px] rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
        >
            Next
        </button>
    </div>
    <!-- <div class="p-[60px]">
        {{ stations }}
    </div> -->
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs, query, setDoc, doc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { store } from '../store'
import backButton from '../components/backButton.vue'
import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue'

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
    if (user) {
        store.currentUid = user.uid
        console.log(user.uid)
    } else {
        store.currentUid = null
    }
})

export default {
    components: {
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        backButton,
    },
    data() {
        return {
            stations: [],
        }
    },
    setup() {
        async function getStations() {
            const querySnapshot = await getDocs(collection(db, 'stations'))
            querySnapshot.forEach((doc) => {
                this.stations.push(doc.data())
                //console.log(this.stations)
            })
        }
        const selected = ref([])
        return {
            getStations,
            selected,
        }
    },
    methods: {
        async selectStaton() {
            const q = query(collection(db, 'users'))
            const querySnapshot = await getDocs(q)
            querySnapshot.docs.map(async () => {
                await setDoc(
                    doc(
                        db,
                        `users/${store.currentUid}/orders`,
                        store.currentUid
                    ),
                    {
                        station: this.selected,
                    }
                )
            })
        },
    },
    created() {
        this.getStations()
    },
}
</script>
