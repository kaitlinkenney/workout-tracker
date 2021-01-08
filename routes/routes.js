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

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.get("/api/workouts", (req, res) => {
    Workout.find({})////////////////?
      .then(dbWork => {
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

  router.put("/api/workouts/:id", (req, res) => {
      const newWorkout = {...req.body, day: Date.now()}

      Workout.findOneAndUpdate(
        {
            _id: req.params.id
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

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    // .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(dbWork => {
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
  });

// router.put("/api/workouts/:id", (req, res) {

// })

// router.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbWork => {
//       res.send(dbWork);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({})
//       .then(dbWork => {
//         res.json(dbWork);
//       })
//       .catch(err => {
//         res.json(err);
//       });
// })

// }

module.exports = router;