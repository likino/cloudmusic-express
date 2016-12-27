var express = require('express');
var router = express.Router();
var api = require('NeteaseCloudMusicApi').api;

/* 搜索功能 */
router.get('/:id', function(req, res, next) {
  api.song(req.params.id, (data) => {
    var song = JSON.parse(data)
    res.send(song);
  })
});

module.exports = router;
