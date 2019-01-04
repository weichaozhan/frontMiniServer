const express = require('express')
const webpack = require('webpack')
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
// const proxy = require('http-proxy-middleware');
const history = require('connect-history-api-fallback')

const port = process.env.PORT || 3000
const app = express()
const config = merge(require('./webpack.config.js'), {
  devtool: 'eval-source-map'
})
const compiler = webpack(config)
app.use(history())
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

// var proxyObj = {
//   target: 'http://localhost:3001',
//   changeOrigin: true
// }

// app.use(proxy(['/api'], proxyObj));

// Serve the files on port 3000.
app.listen(port, function () {
  console.log('Example app listening on port 3000!\n')
});