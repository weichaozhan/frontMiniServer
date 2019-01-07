const webpack = require('webpack') //访问内置的插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const environment = process.env.NODE_ENV

const mainEntry = ['./src/index.js']

const webpackConfig = {
  mode: environment,
  entry: {
    main: environment === 'development' ? mainEntry.concat(['webpack-hot-middleware/client?noInfo=true&reload=true']) : mainEntry
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /(node_modules|bower_components)/, //屏蔽不需要处理的文件（文件夹）（可选）
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      name: true, 
      chunks: 'all', 
      minSize: 10000, 
      maxInitialRequests: 5, // 首页最大并行下载数
      cacheGroups: {
        react: {
          test: (module) => {
            return /[\\/]node_modules[\\/].*react.*/.test(module.context);
          },
          name: 'react',
          priority: 1,
          reuseExistingChunk: true
        },
        antd: {
          test: (module) => {
            return /[\\/]node_modules[\\/].*antd/.test(module.context);
          },
          name: 'antd',
          priority: 1,
          reuseExistingChunk: true
        },
        commons: {
          name: "chunk-comomns",
          minChunks: 2, // 最小共用次数
          priority: 3,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true
    }),
    new webpack
        .optimize
        .OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: '[name]-[hash].js',
    chunkFilename: '[name].bundle.js',
    //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}

module.exports = webpackConfig