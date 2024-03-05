<template>
  <div className="fixed top-0 left-0 w-full z-10">
    <div className="flex justify-between items-center max-w-[500px] h-[58px] mx-auto bg-white border-b border-b-gray-300 px-4">
      <font-awesome-icon icon="fa-solid fa-camera" class="text-xl" />
      <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-f0931.appspot.com/o/instagram_logo_type.png?alt=media&token=4da7e475-e4cf-46fb-888d-321bed519563" alt="instagram-logo-text" class="w-32" />
      <font-awesome-icon @click="handleNavigateToDirectMessage" icon="fa-regular fa-envelope" class="text-xl" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleNavigateToDirectMessage() {
      this.$globalProps.navigate('/direct-message')
    }
  }
}
</script>