const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WorkoutSchema = new Schema(
    {
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            required: "Enter a exercise"
        },
        name: {type: String},
        duration: {type: Number},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number},
        distance: {type: Number},
    }
]
},
{
    toJSON:{
        //include any properties when the data is being
        virtuals: true
    }
}
    // date: "Date",
    // totalDuration: "Total Workout Duration",
    // numExercises: "Exercises Performed",
    // totalWeight: "Total Weight Lifted",
    // totalSets: "Total Sets Performed",
    // totalReps: "Total Reps Performed",
    // totalDistance: "Total Distance Covered" 

)

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
