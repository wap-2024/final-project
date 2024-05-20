const Song = require('../models/song');

exports.getAll = (req, res, next) => {
  res.status(200).json({status: true, message: "All songs", data: Song.getAll(req.query)});
}