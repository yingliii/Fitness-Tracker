const db = require('../models');
const router = require('express').Router();

// GET getLastWorkouts
router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// ADD addExercises by id
router.get('/api/workouts:id', (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    {
      new: true,
    }
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// CREATE createWorkout
router.post('/api/workouts', ({ body }, res) => {
  db.Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET getWorkoutsInRange
router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
