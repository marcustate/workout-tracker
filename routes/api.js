const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.json(err)
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { "exercises": req.body } },
        { new: false, runValidators: true }
    ).then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        });
});

module.exports = router;

