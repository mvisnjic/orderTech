<template>
    <div class="w-full">
        <div
            class="flex flex-col items-center justify-center mx-auto md:mx-auto items-top w-[300px] h-[70px] md:w-[370px] md:h-[70px] my-6 bg-gradient-to-r from-[#E66666] to-[#F39393] rounded-3xl transition-all duration-500 ease-out shadow-[0_35px_77px_-15px_rgba(0,0,0,0.44)] hover:shadow-[0_35px_77px_-17px_rgba(0,0,0,0.64)] hover:scale-[1.05]"
        >
            <div
                class="flex flex-row gap-x-4 justify-start p-0 md:p-6 text-md md:text-lg text-white"
            >
                <div class="font-bold">{{ registration }}</div>
                <div>{{ station }}</div>
                <div>{{ time }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'activeOrders',
    props: ['registration', 'station', 'time'],
}
</script>
