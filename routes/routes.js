const express = require("express");
// const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const models = require("../models/workout");

const Workout = require("../models/workout");

module.exports = function(app) {
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

  app.get("/api/workouts", (req, res) => {
    Workout.findOne(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  
  

  app.put("/api/workouts/:id", (req, res) => {
      const newWorkout = {...req.body, day: Date.now()}

      Workout.update(
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

app.post("/api/workouts", (req, res) => {
  console.log(req.body);

  db.workouts.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

}