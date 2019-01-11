const express = require('express');
const webpack = require('webpack');
const merge = require('webpack-merge');
const chalk = require('chalk');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const proxy = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 3000;
const app = express();
const config = merge(require('./webpack.config.js'), {
  devtool: 'cheap-module-source-map',
})

config.plugins = config.plugins.concat([
  new FriendlyErrorsWebpackPlugin(),
  new SimpleProgressWebpackPlugin({
    format: 'compact',
  }),
]);

const compiler = webpack(config);

app.use(history());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  logLevel: 'silent',
}));
app.use(webpackHotMiddleware(compiler));

// var proxyObj = {
//   target: 'http://localhost:3001',
//   changeOrigin: true
// }

// app.use(proxy(['/api'], proxyObj));

// Serve the files on port 3000.
app.listen(port, function() {});