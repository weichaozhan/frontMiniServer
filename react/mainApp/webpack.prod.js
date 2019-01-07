const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('./webpack.config.js')

module.exports = merge(config, {
  plugins: [
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(['dist']),
    // new CompressionWebpackPlugin({
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(js|jsx)$'),
    //     threshold: 160,
    //     minRatio: 0.8
    // }),
    new OptimizeCSSAssetsPlugin({}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});