import deepmerge from 'deepmerge';
import pwa from './config/modules/pwa';

const modules = pwa;
const config = modules;

export default deepmerge(config, {
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
