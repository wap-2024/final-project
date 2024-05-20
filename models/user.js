const users = require("../data/users.json");
const playList = require("../data/playlists.json");

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.token = null;
    this.playlists = [];
  }

  static getAll() {
    return users;
  }

  static login({email, password}) {
    const index = users.findIndex((user) => user.email === email && user.password === password);
    if (index > -1) {
      const token = Math.random().toString(36);
      users[index].token = token;
      return users[index];
    }
    throw new Error('Invalid credentials');
  }

  static logout({userId, token}) {
    const index = users.findIndex((user) => user.id === userId && token === user.token);
    if (index > -1) {
      users[index].token = null;
      return true;
    }
    throw new Error('User not found');
  }

  static playlists(userId, token) {
    const user = users.find((user) => user.id === userId && token === user.token);
    if (user) {
      const list = [];
      user.playlists.forEach((playlist) => {
        list.push(playList.find((p) => p.id === playlist));
      });
      return list;
    }
    throw new Error('User not found');
  }

  static addPlaylist(userId, songId) {
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex > -1) {
      const songIndex = users[userIndex].playlists.findIndex((song) => song === songId);
      if (songIndex > -1) {
        users[userIndex].playlists[songIndex] = songId;
      } else {
        users[userIndex].playlists.push(songId);
      }
      return true;
    }
    throw new Error('User not found');
  }

  static removePlaylist(userId, songId) {
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex > -1) {
      const songIndex = users[userIndex].playlists.findIndex((song) => song === songId);
      if (songIndex > -1) {
        users[userIndex].playlists.splice(songIndex, 1);
        return true;
      }
      throw new Error('Song not found');
    }
    throw new Error('User not found');
  } 
}