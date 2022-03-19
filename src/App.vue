<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <div id="app" class="h-screen">
        <div
            class="relative grid grid-cols-1 sm:grid-cols-3 items-center pt-10 bg-[#FCFCFF]"
            id="nav"
        >
            <div class="pl-36">
                <a href="#" class="px-12">
                    <img src="./assets/logo.png" />
                </a>
            </div>
            <div class="text-[20px]">
                <router-link
                    to="/"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    >Home</router-link
                >
                |
                <router-link
                    to="/addvehicle"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    >My Cars</router-link
                >
                |
                <router-link
                    to="/login"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    >Login</router-link
                >
                |
                <router-link
                    to="/signup"
                    class="text-[#E55050] hover:text-red-800 hover:font-bold"
                    >Sign up</router-link
                >
            </div>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #fcfcff;
}
</style>
