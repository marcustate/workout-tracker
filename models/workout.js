const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new schema (
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
                    required: "Enter an excercise"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise type is Required"
                },
                duration: {
                    type: "Exercise duration required in minutes"
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
    }
)