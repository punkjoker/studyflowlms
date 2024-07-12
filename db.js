const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // default XAMPP username
  password: '',  // default XAMPP password (empty)
  database: 'studyflow'  // your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
