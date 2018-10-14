export default {
  build: {
    extractCSS: true,
    cssSourceMap: true,
    postcss: {
      preset: {
        stage: 0,
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

  loading: {
    color: 'black',
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact',
  },
};
