<template>
    <div class="flex items-center bg-gray-50 py-4 border-b border-b-gray-300 overflow-x-scroll no-scrollbar">
        <AddStory class="mx-4" />
        <template v-if="isLoading">
            <LoadersStories />
        </template>
        <template v-else>
            <StoryCard
                v-for="user in users"
                :key="user.id"
                class="mr-4"
                :profile-image="user.picture"
                :username="user.firstName"
            />
        </template>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getUsers } from 'lib/services'

const users = reactive([])
const isLoading = ref(false)

const fetchUsers = async (params) => {
    isLoading.value = true
    try {
        const res = await getUsers(params)
        users.push(...res.data?.data)
    } finally {
        isLoading.value = false
    }
}

fetchUsers({limit: 12})

</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>