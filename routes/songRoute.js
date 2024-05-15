const express = require("express");
const songs = require("../data/songs");

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = songs.find((item) => item.id.toString() === id);
  if (!data) {
    return res.json("Not found!");
  }
  res.json(data);
});
router.post("/", (req, res) => {
  const body = req.body;
  const nextId = Math.max(...songs.map((item) => item.id)) + 1;
  const data = {
    ...body,
    id: nextId,
  };

  songs.push(data);
  res.json(data);
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const index = songs.findIndex((item) => item.id.toString() === id);
  if (index === -1) {
    return res.json("Not found!");
  }
  songs[index] = {
    ...songs[index],
    body,
  };
  res.json("Success");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = songs.findIndex((item) => item.id.toString() === id);
  if (index === -1) {
    return res.json("Not found!");
  }
  songs.splice(index, 1);
  res.json("Success");
});

module.exports = router;
