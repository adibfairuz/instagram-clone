<template>
    <div class="bg-white pb-4">
        <div class="flex justify-between items-center mx-4 py-3">
            <div class="flex justify-start items-center">
                <img :src="props.profileImage" class="rounded-full w-9 h-9 mr-4 border border-gray-300" @error="setAltImg" />
                <div class="font-semibold lowercase">{{props.username}}</div>
            </div>
            <font-awesome-icon icon="fa-solid fa-ellipsis" class="text-lg text-black" />
        </div>
        <div class="mb-3">
            <img :src="props.postImage" />
        </div>
        <div class="mx-4 flex justify-between mb-3">
            <div>
                <font-awesome-icon icon="fa-regular fa-heart" class="text-2xl mr-4" />
                <font-awesome-icon icon="fa-regular fa-comment" class="text-2xl mr-4" />
                <font-awesome-icon icon="fa-regular fa-paper-plane" class="text-2xl mr-4" />
            </div>
            <font-awesome-icon icon="fa-regular fa-bookmark" class="text-2xl" />
        </div>
        <div class="mx-4">
            <div class="font-semibold mb-3">
                {{ props.totalLikes }} likes
            </div>
            <div class="mb-3">
                <span class="font-semibold lowercase mr-2">{{ props.username }}</span>
                <span class="font-normal">{{ props.description }}</span>
            </div>
            <div class="text-sm font-normal text-gray-500 mb-3">
                View all {{ props.totalComments }} comments
            </div>
            <div class="text-xs font-normal text-gray-500 uppercase">
                {{ publishTimeAgo }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { timeAgo } from '../../utils'

const props = defineProps({
    username: String,
    profileImage: String,
    postImage: String,
    description: String,
    totalLikes: Number,
    totalComments: Number,
    publishDate: String
})
const publishTimeAgo = timeAgo.format(new Date(props.publishDate))

const setAltImg = (event) => { 
    event.target.src = "https://firebasestorage.googleapis.com/v0/b/instagram-clone-cf514.appspot.com/o/user_placeholder.png?alt=media&token=170d391c-e539-4916-89fd-73d92528b173" 
}

</script>