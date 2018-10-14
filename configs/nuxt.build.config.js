import merge from 'deepmerge';

import baseConfig from './internals/base';
import customConfig from './internals/custom';

export default merge(baseConfig, customConfig, {
  modules: ['~/build/imagemin-webpack-plugin'],
});
