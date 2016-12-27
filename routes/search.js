var express = require('express');
var router = express.Router();
var api = require('NeteaseCloudMusicApi').api;

/* 搜索功能 */
router.get('/:name', function(req, res, next) {
  api.search(req.params.name, (data) => {
    var musics = JSON.parse(data)
    res.send(musics);
  })
});

module.exports = router;
