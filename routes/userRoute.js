const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();


router.get("/", userController.getAll);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/:userId/playlists", userController.playlists);
router.delete("/:userId/playlists/:songId", userController.removePlaylist);

module.exports = router;
