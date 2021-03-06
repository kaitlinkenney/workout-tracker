const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
// const { emit } = require("../models/workout");
const router = require("express").Router();
const Workout = require("../models/workout");

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

//get the most recent workout
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        }
      },
      ])
      .then(dbWork => {
        console.log(dbWork);
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
  });

//updates a workout to add another exercise 
  router.put("/api/workouts/:id", ({body, params}, res)=>  {
    Workout.findByIdAndUpdate(
      params.id,
      {
        $push: {exercises: body}
      }
    )
    .then(dbWork => {
      res.json(dbWork);
    })
    .catch(err => {
      res.json(err);
    })
  })

//creates a new workout collection
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWork => {
        console.log(dbWork)
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });
  });


//gets the durations of workouts for the past 7 days
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      }
    }
  ])
    .sort({ _id: -1})
    .limit(7)
      .then(dbWork => {
        res.json(dbWork);
      })
      .catch(err => {
        res.json(err);
      });

})

module.exports = router;