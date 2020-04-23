const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (res, req) => {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.json(err)
        });
});

router.get("/api/workouts", (res, req) => {
    Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (res, req) => {
    Workout.find({})
        .limit()
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
        { new: true, runValidators: true }
    )
        .catch(err => {
            console.log(err);
            res.json(err)
        });
});

module.exports = router;