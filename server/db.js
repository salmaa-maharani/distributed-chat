const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'chat_db',
  port: process.env.MYSQLPORT || 3306
});

db.connect((err) => {
  if (err) {
    console.log('Database error:', err);
  } else {
    console.log('Database connected!');
  }
});

module.exports = db;