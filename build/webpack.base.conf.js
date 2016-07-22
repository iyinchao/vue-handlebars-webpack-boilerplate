var path = require('path');
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    main: projectRoot + '/client/main.js'
  },
  output: {
    filename: '[name].js',
    path: projectRoot + '/public/javascripts/',
    publicPath: projectRoot + 'public'
  },
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
    }
  ]
};
