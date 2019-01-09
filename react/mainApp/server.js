const express = require('express');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// const proxy = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 3000;
const app = express();
const config = merge(require('./webpack.config.js'), {
  devtool: 'cheap-module-source-map',
})
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