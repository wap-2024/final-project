const Song = require("../models/Song");
const song1 = new Song(
  1,
  "Shape of You",
  "2017-01-06",
  "https://example.com/songs/shape-of-you.mp3"
);
const song2 = new Song(
  2,
  "Havana",
  "2017-08-03",
  "https://example.com/songs/havana.mp3"
);
const song3 = new Song(
  3,
  "Closer",
  "2016-07-29",
  "https://example.com/songs/closer.mp3"
);
const song4 = new Song(
  4,
  "Uptown Funk",
  "2014-11-10",
  "https://example.com/songs/uptown-funk.mp3"
);
const song5 = new Song(
  5,
  "Despacito",
  "2017-01-13",
  "https://example.com/songs/despacito.mp3"
);
const song6 = new Song(
  6,
  "Old Town Road",
  "2019-04-05",
  "https://example.com/songs/old-town-road.mp3"
);
const song7 = new Song(
  7,
  "Shape of You (Acoustic)",
  "2017-01-06",
  "https://example.com/songs/shape-of-you-acoustic.mp3"
);
const song8 = new Song(
  8,
  "Someone Like You",
  "2011-01-24",
  "https://example.com/songs/someone-like-you.mp3"
);
const song9 = new Song(
  9,
  "Billie Jean",
  "1983-01-02",
  "https://example.com/songs/billie-jean.mp3"
);
const song10 = new Song(
  10,
  "Bohemian Rhapsody",
  "1975-10-31",
  "https://example.com/songs/bohemian-rhapsody.mp3"
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
