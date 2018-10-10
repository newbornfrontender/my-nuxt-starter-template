import merge from 'deepmerge';

import baseConfig from './nuxt.base.config';
import customConfig from './nuxt.custom.config';

export default merge(baseConfig, customConfig);
