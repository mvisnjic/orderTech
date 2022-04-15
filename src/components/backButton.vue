<template>
    <div class="flex justify-center pt-0 md:pt-6">
        <div
            class="absolute flex w-11/12 sm:w-5/6 lg:w-5/6 h-[780px] shadow-2xl rounded-xl mt-6 sm:mt-8"
        >
            <div class="mx-6 sm:mx-12 my-6 sm:my-8 lg:my-12">
                <button @click="goBack">
                    <svg
                        class="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        width="20"
                        height="40"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        fill="rgb(229, 80, 80)"
                        clip-rule="evenodd"
                        viewBox="0 0 298 511.93"
                    >
                        <path
                            fill-rule="nonzero"
                            d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1)
        },
    },
}
</script>

<style>
.svg:hover {
    width: 23px;
    height: 43px;
}

@media (max-width: 1025px) {
    .svg {
        width: 20px;
        height: 30px;
    }
    .svg:hover {
        width: 23px;
        height: 33px;
    }
}
</style>
