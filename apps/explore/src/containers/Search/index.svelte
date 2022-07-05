<script>
import Fa from 'svelte-fa/src/fa.svelte'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'
</script>

<div class="fixed top-0 left-0 w-full z-10">
    <div class="max-w-[500px] mx-auto bg-gray-50 flex justify-center items-center px-4 py-3">
        <label for="search" class="sr-only">Search </label>
        <div class="relative z-50 w-full">
            <button class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Fa icon={faSearch} class="text-gray-600" size="14" />
            </button>
            <input type="text" class="block w-full text-sm pl-10 pr-3 py-1 border border-gray-300 rounded-md leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out" placeholder="Search">
        </div>
    </div>
</div>