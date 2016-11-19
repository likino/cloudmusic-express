const api = require('NeteaseCloudMusicApi').api

// api.search('晴天', (data) => {
//   var musics = JSON.parse(data)

//   console.log(musics)
// })

function song(id) {
  return api.song(id, data => {
      var mp3 = JSON.parse(data)
      console.log(mp3.songs[0])
      return mp3.songs[0]
  })
}

song(4224657)
// console.log(song(4224657))