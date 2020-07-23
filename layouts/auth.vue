<template>
  <div
    class="flex flex-col items-center min-h-screen py-8 antialiased auth-background text-t-secondary"
  >
    <div class="w-full px-4 md:w-1/3 md:px-8">
      <div class="mb-4">
        <AppLogo size="lg"></AppLogo>
      </div>
      <Nuxt />
      <AppNotification></AppNotification>
    </div>
  </div>
</template>

<style>
.auth-background {
  background-color: #fbfbfc;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23d7eafb' fill-opacity='0.33'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
