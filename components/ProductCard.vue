<template>
  <div
    class="flex flex-col justify-between flex-1 bg-white rounded-md g-shadow-3"
  >
    <div
      class="relative w-full content-div rounded-t-md"
      :style="`background-image: url('${product.images[imageInView]}');`"
    >
      <div
        class="flex flex-row items-center justify-between w-full h-48 rounded-t-md"
      >
        <button
          class="flex items-center justify-center w-8 h-8 p-1 m-3 text-white bg-gray-500 bg-opacity-50 rounded-full"
          type="button"
          @click="moveLeft"
        >
          <IconChevronLeft class="w-6 h-6" />
        </button>
        <button
          class="flex items-center justify-center w-8 h-8 p-1 m-3 text-white bg-gray-500 bg-opacity-50 rounded-full"
          type="button"
          @click="moveRight"
        >
          <IconChevronRight class="w-6 h-6" />
        </button>
      </div>
      <div class="absolute bottom-0 left-0 flex justify-center w-full">
        <template v-for="i in imagesLength">
          <div
            :key="i"
            class="w-3 h-3 m-1 bg-white rounded-full cursor-pointer"
            :class="[i - 1 === imageInView ? 'opacity-100' : 'opacity-50']"
            @click="imageInView = i - 1"
          ></div>
        </template>
      </div>
    </div>

    <div
      class="flex flex-col justify-between flex-1 w-full px-4 py-4 rounded-b-md"
    >
      <div class="mb-4">
        <div class="mb-2">
          <span
            class="block mb-1 text-xl font-semibold leading-tight tracking-wide text-g-navy"
          >
            {{ product.name }}
          </span>
          <div class="block text-base md:text-lg">
            <span class="font-bold text-g-navy"> ₦ </span>
            <span class="text-primary"> {{ product.price }} </span>
          </div>
        </div>
        <div>
          <!-- <span
            class="mr-2 text-sm font-semibold tracking-wide text-on-background-1"
          >
            Quantity
          </span> -->
          <span class="text-sm">
            {{ product.quantity }}
            <template v-if="product.quantity > 1">
              items
            </template>
            <template v-else>
              item
            </template>
            in stock
          </span>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn__primary" @click="$emit('edit')">
          Edit Product
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="w-1/2 mb-4">
        <button type="button" class="btn btn-secondary is-minor has-icon">
          <span class="mr-2">
            <IconShare class="w-4 h-4" />
          </span>
          Share Product
        </button>
      </div> -->
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      imageInView: 0,
    }
  },

  computed: {
    imagesLength() {
      return this.product.images.length
    },
  },

  mounted() {
    const randomizeImageInView = () => {
      const random = Math.floor(Math.random() * (this.imagesLength - 1))
      this.imageInView = random
    }

    randomizeImageInView()
  },

  methods: {
    moveRight() {
      if (this.imageInView < this.imagesLength - 1) {
        return (this.imageInView = this.imageInView + 1)
      }
      return (this.imageInView = 0)
    },

    moveLeft() {
      if (this.imageInView === 0) {
        return (this.imageInView = this.imagesLength - 1)
      }
      return (this.imageInView = this.imageInView - 1)
    },
  },
}
</script>

<style scoped>
.content-div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
  -remove the classes below if you have the 'group-hover'property added in your tailwind config file
  -also remove the class from the html template
  */
.content-div:hover .fd-cl {
  opacity: 0.25;
}
.content-div:hover .fd-sh {
  opacity: 1;
}
</style>
