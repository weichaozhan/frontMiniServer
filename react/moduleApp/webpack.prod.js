const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./webpack.config.js');

module.exports = merge(config, {
  // externals: {
  //   react: 'react'
  // },
  plugins: [
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(['dist']),
  ]
});