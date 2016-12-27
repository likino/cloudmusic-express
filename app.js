const express = require('express');
const logger = require('morgan');
const app = express();

// 静态
app.use(express.static('./web'));

const search = require('./routes/search');
const song = require('./routes/song');

// 跨域设置 本地测试使用
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(logger('dev'));

app.use('/search', search);
app.use('/song', song);

const server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Musicplayer running at %s', port);
});