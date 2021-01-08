const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WorkoutSchema = new Schema({
    // day: new Date().toISOString(),
    exercises: [{
        type: {type: String},
        duration: {type: String},
        name: {type: String},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number},
        distance: {type: Number},
    }],
    // date: "Date",
    // totalDuration: "Total Workout Duration",
    // numExercises: "Exercises Performed",
    // totalWeight: "Total Weight Lifted",
    // totalSets: "Total Sets Performed",
    // totalReps: "Total Reps Performed",
    // totalDistance: "Total Distance Covered" 
})

module.exports = mongoose.model('Workout', WorkoutSchema);