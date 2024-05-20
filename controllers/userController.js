const User = require('../models/user');

exports.getAll = (req, res, next) => {
  res.status(200).json({status: true, message: "All users", data: User.getAll()});
} 

exports.login = (req, res, next) => {
  res.status(200).json({status: true, message: "Login successful", data: User.login(req.body)});
}

exports.logout = (req, res, next) => {
  res.status(200).json({status: true, message: "Logout successful", data: User.logout(parseInt(req.params.uid), req.body)});
}

exports.playlists = (req, res, next) => {
  console.log(req.headers.token);
  res.status(200).json({status: true, message: "User playlists", data: User.playlists(parseInt(req.params.userId), req.headers.token)});
}