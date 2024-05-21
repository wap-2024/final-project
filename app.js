const express = require("express");
const path = require("path");
const userRoute = require("./routes/userRoute");
const songRoute = require("./routes/songRoute");
const cors = require("cors");
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());


app.use("/songs", songRoute);
app.use('/users', userRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
});
