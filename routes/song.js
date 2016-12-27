const express = require('express');
const router = express.Router();
const api = require('NeteaseCloudMusicApi').api;

/* 搜索功能 */
router.get('/:id', (req, res, next) => {
  api.song(req.params.id, (data) => {
    var song = JSON.parse(data)
    res.send(song);
  })
});

module.exports = router;
