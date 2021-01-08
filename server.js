const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");


const app = express();

app.use(logger("dev"));
app.use(require("./routes/routes"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouttracker";
const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  