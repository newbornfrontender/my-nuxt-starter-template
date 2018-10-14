import merge from 'deepmerge';

import pwa from '../../modules/pwa';
import sitemap from '../../modules/sitemap';

const modules = merge(pwa, sitemap);
const config = modules;

export default merge(config, {
  modules: ['~/build/eslint-loader', '~/build/stylelint-webpack-plugin'],
});
