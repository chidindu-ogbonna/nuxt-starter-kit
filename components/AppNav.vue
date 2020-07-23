<template>
  <div
    class="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-white sm:p-3 md:px-12 g-shadow-3"
  >
    <div>
      <AppLogo></AppLogo>
    </div>
    <div class="">
      <div class="sm:hidden">
        <button @click="$emit('open-sidenav')">
          <img
            :src="user.photoURL"
            :alt="user.displayName"
            class="object-center w-12 h-12 p-1 border-2 rounded-full border-primary"
            @error="setFallbackImageUrl"
          />
        </button>
      </div>
      <div class="items-center hidden font-bold sm:flex">
        <img
          :src="user.photoURL || ''"
          :alt="user.displayName"
          class="object-center w-10 h-10 p-1 border-2 rounded-full border-primary"
        />
        <div class="ml-2 text-sm">
          {{ user.displayName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.user
    },
  },

  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/images/fallback-profile-image.svg`)
    },
  },
}
</script>
