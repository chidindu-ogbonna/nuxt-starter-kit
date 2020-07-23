export default {
  layout: 'auth',

  data() {
    return {
      loading: false,
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters['authentication/isLoggedIn']
    },
  },

  watch: {
    isLoggedIn(value) {
      if (value) {
        this.$router.push({ name: 'index' })
      }
    },
  },

  async mounted() {
    let authExist
    if (process.browser) {
      authExist = sessionStorage.getItem('auth')
      sessionStorage.removeItem('auth')
    }

    if (authExist) {
      this.loading = true
      await this.$store
        .dispatch('authentication/getRedirectResult')
        .catch((error) => {
          this.loading = false
          if (error.code === 'custom-error') {
            this.$notify({
              type: 'error',
              title: 'Error Occurred',
              text: error.message,
            })
          }
        })
    }
  },

  methods: {
    async authWithGoogle() {
      await this.$store.dispatch('authentication/authWithGoogle')
    },
  },
}
