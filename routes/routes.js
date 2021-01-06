const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

db.on("error", error => {
    console.log("Database Error:", error);
  });
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

  app.put("/api/workouts/:id", (req, res) => {
      const newWorkout = {...req.body, day: Date.now()}

      db.workouts.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: newWorkout
        },
        (error, data) => {
            if (error) {
              res.send(error);
            } else {
              res.send(data);
            }
          }
      )
  })