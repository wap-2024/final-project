class Playlist {
  constructor(id) {
    this.id = id;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(songId) {
    this.songs = this.songs.filter((song) => song.id !== songId);
  }

  getSongById(songId) {
    return this.songs.find((song) => song.id === songId);
  }

  getAllSongs() {
    return this.songs;
  }
}

module.exports = Playlist;
