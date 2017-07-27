import { env } from './env';
import { paths } from '../paths';

export const entry = env.isTest === true ? undefined : {
  bundle: [
    'bootstrap-loader',
    'babel-polyfill',
    paths.app,
  ],
};
