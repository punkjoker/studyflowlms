const express = require('express');
const router = express.Router();
const db = require('../dbconfig'); // Adjust path as needed

// POST /api/signup
router.post('/', (req, res) => {
  const { username, password, email, role } = req.body;

  // Assuming you have tables named 'students' and 'instructors'
  const tableName = role === 'student' ? 'students' : 'instructors';

  // Insert into respective table
  db.query(`INSERT INTO ${tableName} (username, password, email) VALUES (?, ?, ?)`, [username, password, email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to sign up. Please try again later.' });
    } else {
      res.status(201).json({ message: 'User signed up successfully.' });
    }
  });
});

module.exports = router;
