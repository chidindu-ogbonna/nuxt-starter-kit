<template>
  <div>
    <div v-if="onboarding">
      <div class="mt-10 text-center">
        <h1 class="text-3xl">Hello, {{ user.displayName }}</h1>
        <h2 class="text-2xl text-t-secondary">
          Welcome To Grid!
        </h2>
      </div>
      <div class="flex flex-col items-center max-w-screen-sm py-8 mx-auto">
        <div
          class="flex flex-col items-center px-8 py-12 text-center bg-white rounded-md g-shadow"
        >
          <div>
            <IconShoppingBag></IconShoppingBag>
            <h2 class="py-4 text-xl">Get Started Adding Your Products</h2>
            <p>
              Add your products manually or connect to Instagram to add products
              directly from your Instagram feed.
            </p>
          </div>
          <div class="flex flex-col w-full px-10 md:flex-row">
            <button
              class="mb-4 md:mb-0 md:mr-8 btn btn__primary btn--has-icon"
              @click="connectInstagram"
            >
              <IconInstagram class="w-5 h-5 mr-2"></IconInstagram>
              Connect Instagram
            </button>
            <button
              class="btn btn__secondary btn--has-icon"
              @click="addProduct"
            >
              <IconAddProduct class="w-5 h-5 mr-2"></IconAddProduct>
              Add Products
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="py-8">
      <div class="flex justify-between p-4 mb-4">
        <h1 class="text-3xl text-t-primary">
          Products
        </h1>
        <div>
          <button
            ref="addButton"
            class="btn btn__secondary btn--has-icon"
            @click="addProduct"
          >
            <IconAddProduct class="w-5 h-5 mr-2"></IconAddProduct>
            Add Products
          </button>
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="flex w-full px-4 mb-8 md:w-1/2 xl:w-1/3"
        >
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
      <div
        :class="[showFab ? 'opacity-100' : 'opacity-0']"
        class="fixed bottom-0 left-0 right-0 flex justify-end w-32 px-6 py-6 ml-auto md:px-8"
      >
        <button class="fab-btn btn--has-icon g-shadow" @click="addProduct">
          <IconAdd class="w-10 h-10"></IconAdd>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params, query, error }) {
    const { onboarding } = query
    if (onboarding) {
      return { onboarding: true }
    }
    return { onboarding: false }
  },

  data() {
    return {
      showFab: false,
    }
  },

  computed: {
    user() {
      return this.$store.state.users.user
    },

    products() {
      return this.$store.state.products.products
    },
  },

  mounted() {
    window.addEventListener('scroll', this.checkFABVisibility)
    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', this.checkFABVisibility)
    })
  },

  methods: {
    checkFABVisibility() {
      const topElement = this.$refs.addButton.getBoundingClientRect()

      if (topElement.bottom <= 60) {
        this.showFab = true
      }

      if (topElement.bottom > 60) {
        this.showFab = false
      }
    },

    connectInstagram() {
      this.$router.push('/')
    },

    addProduct() {
      this.$router.push('/')
    },
  },

  watchQuery(newQuery, oldQuery) {
    console.log('Old: ', oldQuery)
    console.log('New: ', newQuery)

    return true
  },

  meta: {
    requireAuth: true,
  },
}
</script>
