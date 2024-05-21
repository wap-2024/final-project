const playlists = require('../data/playlists.json');

class Song {
  constructor(id, title, releaseDate, src) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.src = src;
  }

  static getAll({keyword}) {
    let songs = playlists;
    if (keyword !== undefined) {
      songs = songs.filter((song) => song.name.toLowerCase().includes(keyword.toLowerCase()));
    }
    return songs;
  }
}

module.exports = Song;
