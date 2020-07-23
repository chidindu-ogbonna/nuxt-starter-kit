/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        error: 'var(--error)',
        't-primary': 'var(--t-primary)',
        't-secondary': 'var(--t-secondary)',
        'on-primary': 'var(--on-primary)',
        'background-primary': 'var(--background-primary)',
        'g-navy': 'var(--g-navy)',
        'g-red': 'var(--g-red)',
        'g-light-red': 'var(--g-light-red)',
        'g-yellow': 'var(--g-yellow)',
        'g-orange': 'var(--g-orange)',
        'g-blue': 'var(--g-blue)',
        'g-light-blue': 'var(--g-light-blue)',
        'g-medium-blue': 'var(--g-medium-blue)',
        'g-purple': 'var(--g-purple)',
        'g-gray': 'var(--g-gray)',
        'g-light-gray': 'var(--g-light-gray)',
        'g-green': 'var(--g-green)',
        'g-pink': 'var(--g-pink)',
      },

      zIndex: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      },

      opacity: {
        '1': '.1',
        '2': '.2',
        '3': '.3',
        '4': '.4',
        '5': '.5',
        '6': '.6',
        '7': '.7',
        '8': '.8',
        '9': '.9',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
