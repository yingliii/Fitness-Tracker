// importing mongoose to define schema for mongodb
const mongoose = require('mongoose');

// define schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // creating a day attribute
  day: {
    type: Date,
    default: Date.now,
  },
  // creating exercise details
  exercises: [
    {
      toObject: { virtuals: true },
      toJSON: { virtuals: true },
    },
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter an exercise name',
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

WorkoutSchema.virtual('totalDuration').get(function () {
  let totalDuration = 0;
  this.exercises.forEach((el) => {
    totalDuration += el.duration;
  });
  return totalDuration;
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
