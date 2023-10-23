const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlIndexPlugin = require('@intervolga/html-index-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getAllFilesInPathSync = require('./internals/utils/getAllFilesInPathSync.js');
const _ = require('lodash');

const MODE = _.get(process, ['env', 'NODE_ENV'], 'production');
const IS_PROD = process.env.NODE_ENV === 'production';
const PUBLIC_PATCH = process.env.SITE_PUBLIC_PATH || '';
const PROXY = process.env.SITE_PROXY;
const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');
const PAGES = path.resolve(__dirname, 'src/bundles');
const GLOBAL_SCSS = path.join(SRC, 'sass-globals', 'globals.scss');
const SAND_HASH = PUBLIC_PATCH === 'sand' ? '.[contenthash]': '';

const BH = require.resolve('@intervolga/bh-ext');
const LEVELS = ['blocks.01-base', 'blocks.02-common', 'blocks.03-bootstrap', 'blocks.04-project'];
const BLOCKS = LEVELS.map((dir) => path.resolve(SRC, dir));
const TECH = {
  styles: ['css', 'scss'],
  scripts: ['js'],
  html: ['bh.js']
};

const entries = getAllFilesInPathSync(PAGES, [], false).filter((path) => /\.bemjson\.js$/i.test(path));

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
        test: /fi\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'assets/[path][name].[contenthash].[ext]'},
          },
        ],
      },
      {
        test: /[^fi]\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              hoistUseStatements: true,
              resources: [ GLOBAL_SCSS ]
            },
          },
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.bemjson\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          '@intervolga/bemrequire-loader',
          {loader: '@intervolga/bembh-loader',  options: {client: 'static', bhFilename: BH },},
          {loader: '@intervolga/bemdeps-loader', options: {levels: BLOCKS, techMap: TECH }},
          {loader: '@intervolga/bemdecl-loader', options: {levels: BLOCKS},},
          '@intervolga/bemjson-loader',
          '@intervolga/eval-loader'
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({}),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: DIST },
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlIndexPlugin({}),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(MODE),
      'PUBLIC_PATH': JSON.stringify(PUBLIC_PATCH),
    }),
    new MiniCssExtractPlugin({
      filename: `[name]${SAND_HASH}.css`,
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
