const express = require('express');
const router = express.Router();
const api = require('../api/app').api;

/* 搜索功能 */
router.get('/:name', (req, res, next) => {
  api.search(req.params.name, (data) => {
    var musics = JSON.parse(data)
    res.send(musics);
  }, 12);
});

module.exports = router;
