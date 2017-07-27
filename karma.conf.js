import webpackConfig from './webpack.config.babel';

const frameworks = [
  // Reference: https://github.com/karma-runner/karma-jasmine
  // Set framework to jasmine
  'jasmine',
];

const reporters = [
  // Reference: https://github.com/mlex/karma-spec-reporter
  // Set reporter to print detailed results to console
  'progress',

  // Reference: https://github.com/karma-runner/karma-coverage
  // Output code coverage files
  'coverage',
];

const files = [
  // Grab all files in the app folder that contain .spec.
  'src/tests.webpack.js',
];

const preprocessors = {
  // Reference: http://webpack.github.io/docs/testing.html
  // Reference: https://github.com/webpack/karma-webpack
  // Convert files with webpack and load sourcemaps
  'src/tests.webpack.js': ['webpack', 'sourcemap'],
};

const browsers = [
  // 'PhantomJS',
  // 'Chrome',
  // 'IE',
  // 'Firefox',
  // 'Edge',
];

const coverageReporter = {
  // Configure code coverage reporter
  dir: 'coverage/',
  reporters: [
    { type: 'text-summary' },
    { type: 'html' },
  ],
};

const webpackMiddleware = {
  // Hide webpack build information from output
  noInfo: 'errors-only',
};

const karmaConfig = (config) => {
  config.set({
    frameworks,
    reporters,
    files,
    preprocessors,
    browsers,
    singleRun: false,
    coverageReporter,
    webpack: webpackConfig,
    webpackMiddleware,
  });
};

export default karmaConfig;
