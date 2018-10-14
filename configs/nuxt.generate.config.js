export default {
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        stage: 1,
      },
    },
  },

  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
    ],
  },

  modules: [
    '~/build/eslint-loader',
    '~/build/stylelint-webpack-plugin',
    '~/build/imagemin-webpack-plugin',

    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  loading: {
    color: 'black',
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact',
  },

  meta: {
    author: 'Infant Frontender',
  },

  sitemap: {
    hostname: 'https://example.com',
    generate: true,
    routes: ['/'],
  },
};
