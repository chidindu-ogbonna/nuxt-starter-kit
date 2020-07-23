export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Grid.ng',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Twitter Cards
      // https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
      {
        hid: 'twitterCard',
        name: 'twitter:card',
        // “summary”, “summary_large_image”, “app”, or “player”.
        content: 'summary',
      },
      { name: 'twitter:site', content: `@${process.env.APP_AUTHOR}` },
      {
        hid: 'twitterTitle',
        name: 'twitter:title',
        content: 'Grid.ng',
      },
      {
        hid: 'twitterDescription',
        name: 'twitter:description',
        content: 'App Description',
      },
      {
        hid: 'twitterImage',
        name: 'twitter:image',
        content: '/images/logo.png',
      },
      {
        hid: 'twitterImageAlt',
        name: 'twitter:image:alt',
        content: 'Grid.ng',
      },
      // OpenGP
      // https://ogp.me/
      {
        hid: 'ogTitle',
        property: 'og:title',
        content: 'Grid.ng',
      },
      {
        hid: 'ogType',
        property: 'og:type',
        content: 'website',
      },
      { hid: 'ogUrl', property: 'og:url', content: process.env.APP_URL },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: '/images/logo.png',
      },
      {
        hid: 'ogSitename',
        property: 'og:site_name',
        content: 'Grid.ng',
      },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: 'App Description',
      },
      { property: 'og:email', content: process.env.APP_EMAIL },
      { property: 'og:phone_number', content: process.env.APP_PHONE },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/animations.scss',
    '@/assets/css/typography.scss',
  ],

  router: {
    middleware: ['authentication'],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/form-validation.js',
    '@/plugins/authentication.js',
    { src: '@/plugins/notification.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
