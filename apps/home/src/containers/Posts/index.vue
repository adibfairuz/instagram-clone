<template>
    <PostCard
        v-for="post in posts"
        :key="post.id"
        class="mb-3"
        :username="post.owner.firstName"
        :profile-image="post.owner.picture"
        :post-image="post.image"
        :description="post.text"
        :total-likes="post.likes"
        :total-comments="getRandomNumber(1,100)"
        :publish-date="post.publishDate"
    />
    <div id="loading">
      <LoadersPosts v-if="isLoading && !posts.length" />
      <LoadersSpinner v-if="isLoading" />
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { getPosts } from 'lib/services'
import { getRandomNumber } from 'lib/utils'

onMounted(() => {
  const loadingElement = document.getElementById('loading')
  const option = {
    rootMargin: '1000px'
  }
  const observer = new IntersectionObserver(function(entries) {
    const pageOffset = window.pageYOffset + window.innerHeight + 1250
    const loadMoreOffset = entries[0].boundingClientRect.top - document.body.getBoundingClientRect().top
    if (
      pageOffset > loadMoreOffset &&
      !isLoading.value &&
      posts.length
    ) {
      page.value++
      fetchPosts({limit: 10, page: page.value})
    }
  }, option)
  observer.observe(loadingElement)
})

const isLoading = ref(false)
const page = ref(0)


const posts = reactive([])

const fetchPosts = async (params) => {
  try {
    isLoading.value = true
    const res = await getPosts(params)
    posts.push(...res.data?.data)
  } finally {
    isLoading.value = false
  }
}

fetchPosts({limit: 10, page: page.value})

</script>