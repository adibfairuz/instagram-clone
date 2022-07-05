<template>
    <div class="flex flex-col justify-center items-center cursor-pointer">
        <div class="flex mb-1 justify-center items-center bg-gradient-to-r from-[#e76ed3] via-[#db2f35] to-[#9333EA] w-[4rem] h-[4rem] rounded-full">
            <img class="rounded-full w-[3.7rem] h-[3.7rem] border-2 border-white shadow-sm" :src="props.profileImage" alt=" " />
        </div>
        <div class="text-xs lowercase">
            {{props.username}}
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        username: String,
        profileImage: String
    })
</script>