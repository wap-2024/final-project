const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/songs", require("./routes/songRoute"));
app.use("/playlist", require("./routes/playlistRoute"));
app.use('/users', userRoute);
app.get("/", (req, res) => {
  res.json("Ok");
});
app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
});
