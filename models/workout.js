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
  ],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
