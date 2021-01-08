const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WorkoutSchema = new Schema({
    day: {Date.now()},
    exercises: [{
        duration: {type: String},
        type: {},
        name: {},
        weight: {},
        sets: {},
        reps: {},
        distance: {},
    }],
    date: "Date",
    totalDuration: "Total Workout Duration",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered" 
})

module.exports = mongoose.model('Workout', WorkoutSchema);