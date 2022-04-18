<template>
    <div
        class="mx-auto flex mt-12 w-[470px] h-[650px] sm:w-[600px] sm:h-[600px] lg:w-[950px] lg:h-[600px] rounded-3xl shadow-2xl"
        v-show="open"
    >
        <div class="mx-auto mt-8 max-w-md w-full space-y-8 px-4 sm:px-0">
            <h2 class="mt-6 text-cetner text-3xl font-bold text-black-900 pb-7">
                Add your car
            </h2>
            <form class="mt-12">
                <div class="grid justify-items-start">
                    <div
                        class="text-sm font-bold text-black-900 tracking-wide pb-[5px]"
                    >
                        Vehicle identification number
                    </div>
                    <input
                        v-model="identification"
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="text"
                        placeholder="WAUZZZ4BZWN049194"
                        required
                    />
                </div>
                <div class="mt-8">
                    <div class="flex justify-between items-center">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Registration
                        </div>
                    </div>
                    <input
                        v-model="registration"
                        class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                        type="text"
                        placeholder="PU533SM"
                        required
                        v-on:keyup.enter="login"
                    />
                </div>
                <div class="flex flex-row space-x-9">
                    <div class="grid justify-items-start my-8">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Car brand
                        </div>
                        <input
                            class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                            type="text"
                            v-model="carBrand"
                            placeholder="BMW"
                            required
                        />
                    </div>
                    <div class="grid justify-items-start my-8">
                        <div
                            class="text-sm font-bold text-black-900 tracking-wide"
                        >
                            Car model
                        </div>
                        <input
                            class="w-full text-lg py-2 border-b bg-[#FCFCFF]"
                            type="text"
                            v-model="carModel"
                            placeholder="M4"
                            required
                        />
                    </div>
                </div>
                <div class="mt-8">
                    <button
                        class="bg-[#E55050] text-white p-4 w-full rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                        type="button"
                        @click="login()"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
        <div class="absolute m-4 cursor-pointer">
            <button type="button" @click="$emit('close')">
                <img src="../assets/close.png" class="h-[25px]" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popUpCar',
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
}
</script>
