<template>
  <div class="px-8 pt-8 pb-4 bg-white rounded-md g-shadow">
    <div class="mb-2 text-center">
      <div class="text-2xl font-semibold text-g-navy">
        Create Account
      </div>
    </div>

    <div v-if="!loading">
      <div>
        <div class="mb-8 text-sm text-center">
          Already have an account?
          <nuxt-link to="/login" class="text-primary hover:underline">
            Sign In
          </nuxt-link>
        </div>
        <button class="btn btn__google btn--has-icon" @click="authWithGoogle">
          <IconGoogle class="w-5 h-5 mr-2"></IconGoogle>
          Sign Up with Google
        </button>
      </div>
      <div class="divider">
        OR
      </div>
      <div v-if="!loading" class="mb-8">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(signUpWithEmail)">
            <div class="mb-4">
              <AppTextInput
                v-model="business"
                name="business"
                label="Business Name"
                autocomplete="company"
                placeholder="e.g Grid.ng"
                rules="required"
              ></AppTextInput>
            </div>
            <div class="mb-4">
              <AppTextInput
                v-model="email"
                name="email"
                label="Email"
                autocomplete="email"
                placeholder="example@grid.ng"
                rules="required|email"
              ></AppTextInput>
            </div>
            <div class="mb-4">
              <AppTextInput
                v-model="password"
                name="password"
                label="Password"
                autocomplete="new-password"
                placeholder="********"
                type="password"
                rules="required|min:6"
              ></AppTextInput>
            </div>
            <div>
              <button type="submit" class="btn btn__primary">
                Create Account
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <div v-else>
      <AppLoader></AppLoader>
    </div>
  </div>
</template>

<script>
import authMixin from '@/mixins/authMixin'

export default {
  name: 'SignUp',
  mixins: [authMixin],

  data() {
    return {
      business: '',
      email: '',
      password: '',
    }
  },

  methods: {
    async signUpWithEmail() {
      try {
        this.loading = true
        const { email, password, business } = this.$data
        const payload = { email, password, business }
        await this.$store.dispatch('authentication/signUpWithEmail', payload)
        this.$router.push({ name: 'index' })
      } catch (error) {
        this.loading = false
        console.log('Error: ', error)
        let title
        let text

        switch (error.code) {
          case 'auth/user-not-found':
            title = 'User Not Found'
            text = 'This account does not exist in Grid'
            break

          default:
            title = 'Error Occurred'
            text = error.message
        }

        this.$notify({ type: 'error', title, text })
      }
    },
  },

  head() {
    return {
      title: 'Sign Up - Grid.ng',
    }
  },
}
</script>
