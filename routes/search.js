const express = require('express');
const router = express.Router();
const api = require('NeteaseCloudMusicApi').api;

/* 搜索功能 */
router.get('/:name', (req, res, next) => {
  api.search(req.params.name, (data) => {
    var musics = JSON.parse(data)
    res.send(musics);
  })
});

module.exports = router;
