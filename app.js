const express = require("express");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/songs", require("./routes/songRoute"));
app.use("/playlist", require("./routes/playlistRoute"));
app.use('/users', userRoute);
app.get("/", (req, res) => {
  res.json("Ok");
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
});
