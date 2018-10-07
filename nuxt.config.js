import merge from 'deepmerge';
import nuxtjsPWA from './config/modules/nuxtjs-pwa';

const modules = nuxtjsPWA;
const config = modules;

export default merge(config, {
  ignore: [
    '**/__tests__/**',
  ],

  build: {
    extractCSS: true,
    cssSourceMap: true,
    postcss: {
      preset: {
        stage: 0,
        autoprefixer: {
          grid: process.env.NODE_ENV === 'development' ? false : true,
        },
      },
    },
  },

  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
    }, {
      'http-equiv': 'x-ua-compatible',
      content: 'ie=edge',
    }],
  },

  modules: [
    './config/build/eslint-loader',
    './config/build/stylelint-webpack-plugin',
  ],

  loading: {
    color: 'black',
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact',
  },
});
