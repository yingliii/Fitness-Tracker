const router = require('express').Router();

const path = require('path');

// GET '/'
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + ' index.html'));
});

// GET '/stats'
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname + './../public/stats.html'));
});

// GET '/exercise'
router.get('/workouts', (req, res) => {
  res.sendFile(path.join(__dirname + './../public/exercise.html'));
});

module.exports = router;
