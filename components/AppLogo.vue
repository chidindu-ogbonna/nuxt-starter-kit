<template>
  <div class="flex items-center justify-center text-g-navy">
    <div class="mr-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current"
        :class="[
          size === 'sm' ? 'w-8 h-8' : '',
          size === 'lg' ? 'w-12 h-12' : '',
        ]"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="square"
        stroke-linejoin="square"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect class="accent-dark" x="4" y="4" width="16" height="4" rx="1" />
        <rect class="accent-dark" x="4" y="12" width="6" height="8" rx="1" />
        <line class="accent-medium" x1="14" y1="12" x2="20" y2="12" />
        <line class="accent-medium" x1="14" y1="16" x2="20" y2="16" />
        <line class="accent-medium" x1="14" y1="20" x2="20" y2="20" />
      </svg>
    </div>
    <div class="flex items-baseline">
      <span
        :class="[
          size === 'sm' ? 'text-2xl' : '',
          size === 'lg' ? 'text-4xl' : '',
        ]"
        class="font-bold font-boing"
      >
        Grid
      </span>
      <span
        :class="[
          size === 'sm' ? 'text-sm' : '',
          size === 'lg' ? 'text-lg' : '',
        ]"
        class="text-lg font-boing"
      >
        .ng
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      // Values -> sm, lg,
      type: String,
      default: 'sm',
    },
  },
}
</script>

<style lang="scss" scoped>
.accent-medium {
  color: var(--logo-medium);
}

.accent-light {
  color: var(--logo-light);
}

.accent-dark {
  color: var(--logo-dark);
}
</style>
