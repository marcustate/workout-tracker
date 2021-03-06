const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise type is Required"
                },
                duration: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJson: {
            virtuals: true
        }
    }   
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;