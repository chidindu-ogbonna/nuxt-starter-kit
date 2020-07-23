<template>
  <AppModal @close="$emit('close')">
    <div class="max-w-screen-sm px-8 pt-8 pb-4 bg-white rounded-md g-shadow">
      <div class="mb-4">
        <h3 class="text-2xl">
          Request Password Reset
        </h3>
        <p>
          An email with instructions to follow will be sent to you.
        </p>
      </div>

      <div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(resetPassword)">
            <div class="mb-4">
              <AppTextInput
                v-model="email"
                name="email"
                placeholder="Enter your email address"
                autocomplete="email"
                rules="required|email"
              />
            </div>
            <button type="submit" class="btn btn__primary">
              Reset Password
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="cursor-pointer" @click="$emit('close')">
      <p class="py-4 font-bold text-white">
        Remember your password ? Login
      </p>
    </div>
  </AppModal>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },

  methods: {
    async resetPassword() {
      try {
        await this.$store.dispatch('authentication/resetPassword', {
          email: this.email,
        })
        this.$notify({
          type: 'info',
          text: `If an account exists for ${this.email}, you will receive password reset instructions.`,
          title: 'Reset Link Sent',
        })
        this.$emit('close')
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Error Occurred',
          text: error.message,
        })
      }
    },
  },
}
</script>
