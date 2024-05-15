const Playlist = require("../model/Playlist");
const songs = require("./songs");

// Create a playlist instance
const playlist = new Playlist();

// Add songs to the playlist
songs.forEach((item) => {
  playlist.addSong(item);
});

module.exports = playlist;
