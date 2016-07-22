/**
 * Test index
 * Created by Administrator on 2016/7/21.
 */

var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var webpack = require('webpack');
var webpackConfig = require('./build/webpack.base.conf.js');

var isDev = true;

var app = express();

if(isDev) {
  var compiler = webpack(webpackConfig);
  var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  });
  var hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' });
      cb();
    })
  });
  app.use(devMiddleware);
  app.use(hotMiddleware);
}


//TODO: production env changes
//app.enable('view cache');

//template engine
app.engine('handlebars', exphbs({
  //layoutsDir : "views/layouts/",
  //partialsDir : "views/partials",
}));
//app.set('views', [path.join(__dirname + '/views'), path.join(__dirname + '/_views')]);
app.set('view engine', 'handlebars');

//load server routes
var route_root = require('./routes/root');
var route_user = require('./routes/user');
//mount routes
app.use('/', route_root);
app.use('/user', route_user);
//mount public static resource
app.use(express.static(__dirname + '/public'));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
