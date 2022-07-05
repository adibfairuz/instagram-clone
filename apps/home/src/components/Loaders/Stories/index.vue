<template>
    <div v-for="i in 10" :key="'stories-skeleton-'+i" class="flex flex-col justify-center items-center animate-pulse mr-4">
        <div class="flex mb-1 justify-center items-center bg-gray-300 w-[4rem] h-[4rem] rounded-full">
            <div class="rounded-full w-[3.7rem] h-[3.7rem] bg-gray-300" />
        </div>
        <div class="w-10 h-2 bg-gray-300">
        </div>
    </div>
</template>