<script>
import { getPosts } from 'lib/services'
import { getRandomNumber } from 'lib/utils'
import { onMount } from 'svelte/internal';
import Spinner from "../../components/Spinner/index.svelte";

let isLoading = false
let posts = []
let page = getRandomNumber(1, 20)

onMount(() => {
    const loadingElement = document.getElementById('loading')
    const option = {
        rootMargin: '100px'
    }
    const observer = new IntersectionObserver(function(entries) {
        const pageOffset = window.pageYOffset + window.innerHeight + 100
        const loadMoreOffset = entries[0].boundingClientRect.top - document.body.getBoundingClientRect().top
        if (
            pageOffset > loadMoreOffset &&
            !isLoading &&
            posts.length
        ) {
        page++
        fetchPosts({limit: 24, page: page})
        }
    }, option)
    observer.observe(loadingElement)
})

const fetchPosts = async (params) => {
  try {
    isLoading = true
    const res = await getPosts(params)
    const postsRes = res.data?.data
    const postGroup = []
    for (let i = 0, j = 0; i < postsRes.length; i = i + 3, j++) {
        postGroup[j]  = [
            postsRes[i],
            postsRes[i+1],
            postsRes[i+2]
        ]
    }
    posts = [
        ...posts,
        ...postGroup
    ]
  } finally {
    isLoading = false
  }
}

fetchPosts({limit: 24, page: page})


</script>

<div class="grid gap-1">
    {#each posts as postGroup, i}
        <div class="grid grid-cols-3 gap-1">
            {#each postGroup as post, j}
                <div class={i % 3 === 0 && (i % 2 === 0 ? j === 0 : j === 1 ) ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}>
                    <img class="aspect-square object-cover w-full h-full" alt=" " src={post.image}>
                </div>
            {/each}
        </div>
    {/each}
</div>
<div id="loading" class={!posts.length && 'w-full h-screen flex justify-center items-center'}>
    {#if isLoading}
         <Spinner />
    {/if}
</div>