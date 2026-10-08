// @dada78641/eslint-config <https://github.com/dada78641/eslint-config>
// MIT license

import {createConfigs} from './lib/config.js';

export const {baseConfig, nodeConfig} = createConfigs({semi: false});

export default baseConfig;
