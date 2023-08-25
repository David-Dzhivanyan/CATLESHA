const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getAllFilesInPathSync = require('./internals/utils/getAllFilesInPathSync.js');

const IS_PROD = process.env.NODE_ENV === 'production';
const PUBLIC_PATCH = process.env.SITE_PUBLIC_PATH || '';
const PROXY = process.env.SITE_PROXY || null;
const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');
const PAGES = path.resolve(__dirname, 'src/bundles');

const entries = getAllFilesInPathSync(PAGES).filter((path) => /\.bemjson\.js$/i.test(path));

module.exports = {
  entry: {
    merged: entries,
  },
  output: {
    clean: true,
    path: DIST,
    publicPath: PUBLIC_PATCH,
  },
  resolve: {
    alias: {
      '@': SRC,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff?2)(\?v=[\d+.]+)?$/,
        use: [ 'asset/resource' ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [ 'asset/resource' ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({}),
    new CopyPlugin({
      patterns: [
        { from: PAGES, to: PAGES },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    proxy: PROXY && [
      {
        context: ['/rest', '/upload'],
        target: PROXY,
        changeOrigin: true,
        secure: true,
      }
    ],
  }
}