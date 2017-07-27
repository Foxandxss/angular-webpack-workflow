import { env } from './env';
import { paths } from '../paths';

export const output = env.isTest === true ? {} : {
  path: paths.dist,
  publicPath: env.isProd === true ? '/' : 'http://localhost:8080/',
  filename: env.isProd === true ? '[name].[hash].js' : '[name].bundle.js',
  chunkFilename: env.isProd === true ? '[name].[hash].js' : '[name].bundle.js',
};
