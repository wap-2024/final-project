const Song = require("../models/Song");
const song1 = new Song(
  1,
  "Not Like Us",
  "Kendrick Lamar",
  "2024-05-04",
  "../public/mp3/not-like-us.mp3"
);
const song2 = new Song(
  2,
  "euphoria",
  "Kendrick Lamar",
  "2024-04-30",
  "../public/mp3/euphoria.mp3"
);
const song3 = new Song(
  3,
  "one of wun",
  "2024-05-10",
  "../public/mp3/one-of-wun.mp3"
);
const song4 = new Song(
  4,
  "meet the grahams",
  "Kendrick Lamar",
  "2024-05-03",
  "../public/mp3/meet-the-grahams.mp3"
);
const song5 = new Song(
  5,
  "Family Matters",
  "Drake",
  "2024-05-03",
  "../public/mp3/family-matters.mp3"
);
const song6 = new Song(
  6,
  "Little Foot Big Foot",
  "Childish Gambino (Ft. Young Nudy)",
  "2024-05-13",
  "../public/mp3/little-foot-big-foot.mp3"
);
const song7 = new Song(
  7,
  "6:16 in LA",
  "Kendrick Lamar",
  "2024-05-03",
  "../public/mp3/6-16-in-LA.mp3"
);
const song8 = new Song(
  8,
  "I Had Some Help",
  "Post Malone (Ft. Morgan Wallen)",
  "2024-05-10",
  "../public/mp3/i-had-some-help.mp3"
);
const song9 = new Song(
  9,
  "THE HEART PART 6",
  "2024-05-05",
  "../public/mp3/the-heart-part-6.mp3"
);
const song10 = new Song(
  10,
  "Mockingbird",
  "Eminem",
  "2004-12-12",
  "../public/mp3/mockingbird.mp3"
);

// Mocking items array
const songs = [
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10,
];

module.exports = songs;
