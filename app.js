var express = require('express');
var logger = require('morgan');
var app = express();

// 静态
app.use(express.static('./web'));

var search = require('./routes/search');
var song = require('./routes/song');

// 跨域
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

app.use(logger('dev'));

app.use('/search', search);
app.use('/song', song);

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Musicplayer running at %s', port);
});