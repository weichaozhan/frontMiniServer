const webpack = require('webpack') //访问内置的插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const environment = process.env.NODE_ENV

const mainEntry = environment === 'development' ? ['./src/index.js'] : ['./src/components/index.js']

const webpackConfig = {
  mode: environment,
  entry: {
    moduleApp: environment === 'development' ? mainEntry.concat(['webpack-hot-middleware/client?noInfo=true&reload=true']) : mainEntry
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
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      name: true, chunks: 'all', 
      minSize: 10000, 
      maxInitialRequests: 4, // 首页最大并行下载数
      cacheGroups: {
        react: {
          test: (module) => {
            return /react/.test(module.context);
          },
          name: 'react',
          priority: 3,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack
        .optimize
        .OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: '[name]-[hash].js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'umd',
    library: 'moduleApp',
    //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  }
}

if (environment === 'development') {
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: true
  }))
}

if (environment === 'production') {
  webpackConfig.output.publicPath = 'http://localhost:3002/dist/';
}

module.exports = webpackConfig