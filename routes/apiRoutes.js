const db = require('../models');
const router = require('express').Router();

// GET getLastWorkouts
router.get('/api/workouts', (req, res) => {
  console.log('ALL WORKOUTS');

  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      workout.forEach((workoutRange) => {
        var total = 0;
        workoutRange.exercises.forEach((e) => {
          total += e.duration;
        });
        workoutRange.totalDUration = total;
      });
      res.status(200).json(workout);
      console.log('Successfully get workout', workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// ADD addExercises by id
router.put('/api/workouts/:id', (req, res) => {
  console.log('put exercise', req.body, req.params.id);
  db.Workout.findByIdAndUpdate(
    req.params.id,
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
      console.log('Successfully add workout');
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

// CREATE createWorkout
router.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then((workout) => {
      res.json(workout);
      console.log('Successfully create workout');
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET getWorkoutsInRange
router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
      console.log('successfully get workouts in range!', workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
