const playlists = require('../data/playlists.json');

class Song {
  constructor(id, title, artis, releaseDate, src) {
    this.id = id;
    this.title = title;
    this.artis = artis;
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

  static add({title, artis, releaseDate, src}) {
    const id = playlists.length + 1;
    const song = new Song(id, title, artis, releaseDate, src);
    playlists.push(song);
    return song;
  }

  static update(id, {title, artis, releaseDate, src}) {
    const index = playlists.findIndex((song) => song.id == id);
    if (index > -1) {
      playlists[index].title = title;
      playlists[index].artis = artis;
      playlists[index].releaseDate = releaseDate;
      playlists[index].src = src;
      return playlists[index];
    }
    throw new Error('Song not found');
  }

  static delete(id) {
    const index = playlists.findIndex((song) => song.id == id);
    if (index > -1) {
      playlists.splice(index, 1);
      return true;
    }
    throw new Error('Song not found');
  }
}


module.exports = Song;
