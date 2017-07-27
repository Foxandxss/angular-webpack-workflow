import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { env } from './env';

const scripts = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

const styles = {
  test: /\.(scss|css)$/,
  loader: env.isTest === true ? 'null-loader' : ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: [
      { loader: 'css-loader', query: { sourceMap: true } },
      { loader: 'postcss-loader' },
      { loader: 'sass-loader' },
    ],
  }),
};

const index = {
  include: /index.html$/,
  use: 'html-loader',
};

const markup = {
  test: /\.html$/,
  exclude: [
    /index.html$/,
  ],
  use: [
    {
      loader: 'ngtemplate-loader',
    },
    {
      loader: 'html-loader',
    },
  ],
};

const assets = {
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
  loader: 'file-loader',
};

const rules = [
  scripts,
  index,
  markup,
  styles,
  assets,
];

if (env.isTest === true) {
  const istanbul = {
    enforce: 'pre',
    test: /\.js$/,
    exclude: [
      /node_modules/,
      /\.spec\.js$/,
    ],
    loader: 'istanbul-instrumenter-loader',
    query: {
      esModules: true,
    },
  };

  rules.push(istanbul);
}

export const module = {
  rules,
};
