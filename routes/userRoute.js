const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();


router.get("/", userController.getAll);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/:userId/playlists", userController.playlists);
// router.post("/:uid/playlist/:plid", (req, res) => {});
// router.put("/:uid/playlist/:plid", (req, res) => {});
// router.delete("/", (req, res) => {});

module.exports = router;
