<template>
  <div>
    <ResetPasswordModal
      v-if="showResetPasswordModal"
      @close="showResetPasswordModal = false"
    ></ResetPasswordModal>
    <div class="px-8 pt-8 pb-4 bg-white rounded-md g-shadow">
      <div class="mb-2 text-center">
        <div class="text-2xl font-semibold text-g-navy">
          Welcome To Grid
        </div>
      </div>

      <div v-if="!loading">
        <div>
          <div class="mb-8 text-sm text-center">
            Don't have an account?
            <nuxt-link to="/signup" class="text-primary hover:underline">
              Sign up for free
            </nuxt-link>
          </div>
          <button class="btn btn__google btn--has-icon" @click="authWithGoogle">
            <IconGoogle class="w-5 h-5 mr-2"></IconGoogle>
            Continue with Google
          </button>
        </div>
        <div class="divider">
          OR
        </div>
        <div class="mb-8">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(loginWithEmail)">
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
                  autocomplete="current-password"
                  placeholder="********"
                  type="password"
                  rules="required|min:6"
                ></AppTextInput>
              </div>
              <div>
                <button type="submit" class="btn btn__primary">
                  Log In
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div class="text-sm">
          <div class="mb-2">
            Forgot your password ?
            <a
              href="#"
              class="text-primary hover:underline"
              @click="showResetPasswordModal = true"
            >
              Reset Your Password
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <AppLoader></AppLoader>
      </div>
    </div>
  </div>
</template>

<script>
import authMixin from '@/mixins/authMixin'

export default {
  name: 'Login',
  mixins: [authMixin],

  data() {
    return {
      email: '',
      password: '',
      showResetPasswordModal: false,
    }
  },

  methods: {
    async loginWithEmail() {
      this.loading = true
      try {
        const { email, password } = this.$data
        const payload = { email, password }
        await this.$store.dispatch('authentication/loginWithEmail', payload)
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

          case 'auth/wrong-password':
            title = 'Incorrect Password'
            text = 'Please check the password you entered'
            break

          default:
            title = 'Error Occurred'
            text = error.message
        }

        this.$notify({ type: 'error', title, text })
      }
    },

    resetPassword() {
      console.log('Reset Password')
    },
  },

  head() {
    return {
      title: 'Login - Grid.ng',
    }
  },
}
</script>
