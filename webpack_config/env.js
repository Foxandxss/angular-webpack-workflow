const npmLifecycleEvent = process.env.npm_lifecycle_event;

const isTestCheck = () =>
  npmLifecycleEvent === 'test' || npmLifecycleEvent === 'test-watch';

const isProdCheck = () => npmLifecycleEvent === 'build';

export const env = {
  isTest: isTestCheck(),
  isProd: isProdCheck(),
};
