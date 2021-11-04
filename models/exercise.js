// importing mongoose to define schema for mongodb
const mongoose = require('mongoose');

// define schema
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: 'Enter an exercise type',
  },
  name: {
    type: String,
    trim: ture,
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
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
