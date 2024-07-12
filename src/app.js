const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for Students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  db.query('INSERT INTO students SET ?', newStudent, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newStudent });
  });
});

app.put('/students/:id', (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;
  db.query('UPDATE students SET ? WHERE id = ?', [updatedStudent, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Student updated', affectedRows: result.affectedRows });
  });
});

app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Student deleted', affectedRows: result.affectedRows });
  });
});

// Routes for Instructors
app.get('/instructors', (req, res) => {
  db.query('SELECT * FROM instructors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/instructors/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM instructors WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

app.post('/instructors', (req, res) => {
  const newInstructor = req.body;
  db.query('INSERT INTO instructors SET ?', newInstructor, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newInstructor });
  });
});

app.put('/instructors/:id', (req, res) => {
  const id = req.params.id;
  const updatedInstructor = req.body;
  db.query('UPDATE instructors SET ? WHERE id = ?', [updatedInstructor, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Instructor updated', affectedRows: result.affectedRows });
  });
});

app.delete('/instructors/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM instructors WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Instructor deleted', affectedRows: result.affectedRows });
  });
});

// Routes for Courses
app.get('/courses', (req, res) => {
  db.query('SELECT * FROM courses', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM courses WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

app.post('/courses', (req, res) => {
  const newCourse = req.body;
  db.query('INSERT INTO courses SET ?', newCourse, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newCourse });
  });
});

app.put('/courses/:id', (req, res) => {
  const id = req.params.id;
  const updatedCourse = req.body;
  db.query('UPDATE courses SET ? WHERE id = ?', [updatedCourse, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Course updated', affectedRows: result.affectedRows });
  });
});

app.delete('/courses/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM courses WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Course deleted', affectedRows: result.affectedRows });
  });
});

// Routes for Enrollments
app.get('/enrollments', (req, res) => {
  db.query('SELECT * FROM enrollments', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/enrollments/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM enrollments WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

app.post('/enrollments', (req, res) => {
  const newEnrollment = req.body;
  db.query('INSERT INTO enrollments SET ?', newEnrollment, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newEnrollment });
  });
});

app.put('/enrollments/:id', (req, res) => {
  const id = req.params.id;
  const updatedEnrollment = req.body;
  db.query('UPDATE enrollments SET ? WHERE id = ?', [updatedEnrollment, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Enrollment updated', affectedRows: result.affectedRows });
  });
});

app.delete('/enrollments/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM enrollments WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Enrollment deleted', affectedRows: result.affectedRows });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
