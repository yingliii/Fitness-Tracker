// importing mongoose to define schema for mongodb
const mongoose = require('mongoose');

// define schema
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
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
