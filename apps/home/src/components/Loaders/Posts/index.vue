<template>
    <div v-for="i in 10" :key="'posts-loaders'+i" class="bg-white pb-4 mb-3 animate-pulse">
        <div class="flex justify-between items-center mx-4 py-3">
            <div class="flex justify-start items-center">
                <div class="rounded-full w-9 h-9 mr-4 bg-gray-300" />
                <div class="w-16 h-3 bg-gray-300" />
            </div>
            <div class="w-6 h-3 bg-gray-300" />
        </div>
        <div class="mb-3 w-full h-[480px] bg-gray-300" />
        <div class="mx-4 mb-3 w-24 h-4 bg-gray-300" />
        <div class="mx-4">
            <div class="mb-3 w-full h-4 bg-gray-300" />
            <div class="mb-3 w-full h-4 bg-gray-300" />
        </div>
    </div>
</template>