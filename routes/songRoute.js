const express = require("express");
const songController = require("../controllers/songController");

const playlists = require("../data/playlists.json");
const songs = require("../data/songs");

const router = express.Router();

router.get("/", songController.getAll);


module.exports = router;
