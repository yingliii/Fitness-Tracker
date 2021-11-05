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
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
    {
      toObject: { virtuals: true },
      toJSON: { virtuals: true },
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
