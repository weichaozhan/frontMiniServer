const webpack = require('webpack'); //访问内置的插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const environment = process.env.NODE_ENV;

const mainEntry = ['./src/index.js'];
const themes = require('./antd.themes.js');

const webpackConfig = {
  mode: environment,
  entry: {
    main: environment === 'development' ? mainEntry.concat(['webpack-hot-middleware/client?noInfo=true&reload=true']) : mainEntry,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
      }, 
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'babel-loader?cacheDirectory',
          },
        ],
      }, 
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: environment === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                ...themes.theme1,
              },
              javascriptEnabled: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name][contentHash:8].[ext]',
              outputPath: 'assets/images/',
            }
          },
        ],
      }, 
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src', 'audio:src'],
            minimize: true,
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  optimization: {
    splitChunks: {
      name: 'common', 
      chunks: 'all', 
      minSize: 10000,
      maxInitialRequests: 5, // 首页最大并行下载数
      cacheGroups: {
        react: {
          test: (module) => {
            return /[\\/]*node_modules[\\/].*(react|redux).*/.test(module.context);
          },
          name: 'react',
          priority: 1,
          reuseExistingChunk: true,
        },
        antd: {
          test: (module) => {
            return /[\\/]*node_modules[\\/].*(antd|ant-design).*/.test(module.context);
          },
          name: 'antd',
          priority: 1,
          reuseExistingChunk: true,
        },
      },
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      chunkFilename: '[name].[contentHash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
    }),
    new webpack
        .optimize
        .OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
}

if (environment === 'development') {
  webpackConfig.devtool = 'source-map';
}

module.exports = webpackConfig;