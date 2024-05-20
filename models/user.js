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

  static logout(userId, {token}) {
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

  static addPlaylist(playlist) {
    this.playlists.push(playlist);
  }

  static removePlaylist(playlist) {
    this.playlists = this.playlists.filter((p) => p !== playlist);
  } 
}