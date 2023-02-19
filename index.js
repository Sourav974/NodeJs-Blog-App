const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

mongoose.set("strictQuery", true);

const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;

//connection to mongodb
mongoose.connect("mongodb://localhost:27017/blogify", () => {
  console.log("MongoDb Connected!!!");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
