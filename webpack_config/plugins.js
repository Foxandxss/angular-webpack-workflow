import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { env } from './env';
import { paths } from '../paths';

let pluginsDesenvolvimentoProducao = [];
let pluginsProducao = [];

if (env.isTest === false) {
  pluginsDesenvolvimentoProducao = [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: env.isProd === false,
      allChunks: true,
    }),
  ];
}

if (env.isProd === true) {
  pluginsProducao = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{
      from: paths.public,
    }]),
  ];
}

export const plugins = [
  ...pluginsDesenvolvimentoProducao,
  ...pluginsProducao,
];
