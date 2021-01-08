const express = require("express");
// const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const router = require("express").Router();
// const models = require("../models/workout");

const Workout = require("../models/workout");

// module.exports = function(router) {
  
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})////////////////?
      .then(dbWork => {
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

  // app.post("/api/workouts/:id", (req, res) => {
  //     const newWorkout = {...req.body, day: Date.now()}

  //     Workout.findOneAndUpdate(
  //       {
  //           _id: mongojs.ObjectId(req.params.id)
  //       },
  //       {
  //           $set: newWorkout
  //       },
  //       (error, data) => {
  //           if (error) {
  //             res.send(error);
  //           } else {
  //             res.send(data);
  //           }
  //         }
  //     )
  // })

  router.post("/api/workouts", (req, res) => {
    db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true })
      .then(dbWork => {
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWork => {
      res.send(dbWork);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
      .then(dbWork => {
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
})

// }

module.exports = router;