// src/router.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Define all your routes here using the pattern shown above in app.js

// For example:
router.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Repeat for other routes...

module.exports = router;
