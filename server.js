const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(require("./routes/routes"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "workouttracker";
// const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false});



// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

  