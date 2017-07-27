import { env } from './env';

export const devtool = (() => {
  if (env.isTest === true) {
    return 'inline-source-map';
  } else if (env.isProd === true) {
    return 'source-map';
  }
  return 'eval-source-map';
})();
