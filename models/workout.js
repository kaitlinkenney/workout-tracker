const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//sets the model for a workout in the database
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
                    required: "Enter an exercise"
                },
                name: {
                    type: String,
                },
                duration: { type: Number
                },
                weight: { type: Number },
                sets: { type: Number },
                reps: { type: Number },
                distance: { type: Number },
            }
        ],
    },
)

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
