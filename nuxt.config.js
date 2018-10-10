import merge from 'deepmerge';

import pwa from './modules/pwa';
import sitemap from './modules/sitemap';

const modules = merge(pwa, sitemap);
const config = modules;

export default merge(config, {
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
    './build/eslint-loader',
    './build/stylelint-webpack-plugin',
  ],

  loading: {
    color: 'black',
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact',
  },
});
