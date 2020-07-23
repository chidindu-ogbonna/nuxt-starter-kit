<template>
  <div
    class="fixed top-0 right-0 flex flex-col items-center justify-center w-full h-screen px-3 bg-black bg-opacity-50 z-2"
  >
    <div class="absolute top-0 right-0 px-4 py-4 md:px-8">
      <button @click="$emit('close')">
        <IconCancel class="w-6 h-6 text-white" />
      </button>
    </div>

    <slot />
  </div>
</template>
