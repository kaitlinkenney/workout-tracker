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
                    required: "Enter an exercise",
                },
                name: {
                    type: String,
                    // trim: true
                },
                duration: { type: Number },
                weight: { type: Number },
                sets: { type: Number },
                reps: { type: Number },
                distance: { type: Number },
            }
        ],
    },
    // {
    //     toJSON:{
    //         //include any properties when the data is being
    //         virtuals: true
    //     }
    // }

)

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
