// plugins
const _ = require('lodash');
const { get, keyBy, map, filter } = _;
const dotenv = require('dotenv');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackAssetTemplatePlugin = require('@intervolga/html-webpack-asset-template-plugin');
const HtmlIndexPlugin = require('@intervolga/html-index-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const pkg = require('../package.json');

const path = require('path');
const utils = require('./utils');


const mode = get(process, 'env.NODE_ENV', 'production');
const modeProduction = 'production' === mode;
const dirProject = path.resolve(__dirname, '../');
const src = path.join(dirProject, 'src');
const srcBundles = path.join(src, 'bundles');
const srcGlobalSass = path.join(src, 'sass-globals', 'globals.scss');
const env = modeProduction ? path.join(dirProject, '.env') : path.join(dirProject, '.env.development.local');

dotenv.config({ path: env });

const bundle = get(process, 'env.SITE_BUNDLES', '');
const proxy = get(process, 'env.SITE_PROXY') || get(pkg, 'proxy');
const bemLevels = get(pkg, 'bemLevels', []);
const bemTechs = get(pkg, 'bemTechs', []);
const publicPath = modeProduction ? get(process, 'env.SITE_PUBLIC_PATH', get(pkg, 'publicPath', '')) : '';
const regex = (path) => new RegExp(`${bundle}.bemjson.js`).test(path);
const pathsBundles = filter(utils.getAllFilesInPathSync(srcBundles, [], false), regex);

let dir = 'build';
if (mode === 'production' || mode === 'sand') dir = 'dist';

const fileName = {
  dir,
  main: 'assets/[name].js',
  asset: 'assets/[path][name].[ext]?[hash]',
  css: '[name].css',
};

const entries = pathsBundles;
const outputPath = path.join(dirProject, fileName.dir);

const entry = modeProduction
  ? {merged: entries}
  : keyBy(entries, (entry) => path.basename(entry, '.js'));

const HtmlWebpackPlugins = map(entries, (name) => {
  const base = path.basename(name, '.js');
  return new HtmlWebpackPlugin({
    chunks: [modeProduction ? 'merged' : base],
    filename: base + '.html',
    xhtml: true,
  });
});

module.exports = {
  mode,
  entry,
  output: {
    path: outputPath,
    filename: fileName.main,
    publicPath,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        bh: {
          test: /bh\.js$/,
          name: 'merged.bh',
          priority: 0,
        },
      },
    },
  },
  devServer: {
    contentBase: outputPath,
    host: '0.0.0.0',
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    proxy: [
      {
        context: ['/rest', '/upload', '/bitrix'],
        target: proxy,
        changeOrigin: true,
        secure: true,
      }
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff)(\?v=[\d+.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: fileName.asset},
          },
        ],
      },
      {
        test: /\.woff2(\?v=[\d+.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {name: fileName.asset, limit: 3072},
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: fileName.asset},
          },
          {
            loader: 'image-webpack-loader',
            options: {disable: !modeProduction},
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {minimize: modeProduction, sourceMap: modeProduction, importLoaders: 1},
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: modeProduction},
            },
          ],
        }),
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {minimize: modeProduction, sourceMap: modeProduction, importLoaders: 1},
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: modeProduction},
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  sourceMap: modeProduction,
                  outputStyle: 'expanded',
                },
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                hoistUseStatements: true,
                resources: [
                  srcGlobalSass
                ]
              },
            },
          ],
        }),
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {cacheDirectory: !modeProduction, babelrc: true},
          },
        ],
      },
      {
        test: /\.bemjson\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {cacheDirectory: !modeProduction, babelrc: true},
          },
          {
            loader: '@intervolga/bemrequire-loader',
          },
          {
            loader: '@intervolga/bembh-loader',
            options: {client: 'static', bhFilename: require.resolve('@intervolga/bh-ext')},
          },
          {
            loader: '@intervolga/bemdeps-loader',
            options: {levels: bemLevels, techMap: bemTechs},
          },
          {
            loader: '@intervolga/bemdecl-loader',
            options: {levels: bemLevels},
          },
          {
            loader: '@intervolga/bemjson-loader',
          },
          {
            loader: '@intervolga/eval-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({}),

    ...HtmlWebpackPlugins,
    new HtmlIndexPlugin({}),
    new HtmlWebpackAssetTemplatePlugin({}),

    new ExtractTextPlugin({
      allChunks: true,
      filename: fileName.css,
      disable: !modeProduction,
    }),
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {preset: ['default', {discardComments: {removeAll: true}}]},
    }),
    new ImageminPlugin({test: /\.(jpe?g|png|gif|svg)$/i, disable: !modeProduction}),

    new CopyWebpackPlugin([
      {from: path.join(srcBundles, '**', '*.{jpeg,jpg,png,gif,svg,ico,json}'), context: srcBundles},
    ]),

    new CleanWebpackPlugin([outputPath]),
  ],
};
