<template>
    <div class="grid grid-rows-3 place-items-center gap-6 justify-center pt-16">
        <div class="font-bold text-2xl">
            <p>Select a date</p>
        </div>
        <div>
            <select class="px-6 py-3 rounded-full bg-[#fcfcff]">
                <option value="date">1.1.2022</option>
                <option value="date2">1.2.2022</option>
                <option value="date3">1.3.2022</option>
            </select>
        </div>
        <div>
            <button
                class="bg-[#E55050] text-white p-4 w-full rounded-full tracking-wide font-semibold font-display hover:bg-red-600"
                type="button"
            >
                Submit
            </button>
        </div>
    </div>
</template>
