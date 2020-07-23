<template>
  <div class="flex flex-row min-h-screen antialiased text-t-secondary">
    <AppSideNav :show-side-nav="showSideNav"></AppSideNav>
    <div class="flex flex-col w-full md:ml-56 bg-background-primary">
      <AppNav @open-sidenav="showSideNav = !showSideNav"></AppNav>
      <div class="p-2 mt-10 md:p-4 lg:px-8 md:mt-12">
        <Nuxt />
        <AppNotification></AppNotification>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideNav: false,
    }
  },
}
</script>
