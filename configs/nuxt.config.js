import merge from 'deepmerge';

import baseConfig from './internals/base';
import customConfig from './internals/custom';

export default merge(baseConfig, customConfig, {
  env: {
    NODE_ENV: 'development',
  },
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: false,
        },
      },
    },
  },
});
