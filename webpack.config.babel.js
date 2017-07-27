import { module } from './webpack_config/module';
import { entry } from './webpack_config/entry';
import { devtool } from './webpack_config/devtool';
import { output } from './webpack_config/output';
import { plugins } from './webpack_config/plugins';
import { devServer } from './webpack_config/dev-server';

const config = {
  entry,
  devtool,
  module,
  output,
  plugins,
  devServer,
};

export default config;
