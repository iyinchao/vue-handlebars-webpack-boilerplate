var path = require('path');
var config = require('./config');
var webpack = require('webpack');
var utils = require('./utils');

var projectRoot = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?onInfo=true&reload=true', projectRoot + '/client/main.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'client': path.resolve(__dirname, '../client'),
      'assets': path.resolve(__dirname, '../client/assets'),
      'components': path.resolve(__dirname, '../client/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      //if file size smaller than limit, then make it a inline base64
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
};
