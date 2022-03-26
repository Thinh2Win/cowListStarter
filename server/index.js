const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let db;

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/cows', (req, res) => {
  db.query('SELECT * FROM cows'),
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
  // readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice => {
  //   if (choice === 'mongo') {
  //     console.log('Your db is Mongo');
  //     db = require('../database/mongo');
  //   } else if (choice === 'mysql') {
      console.log('Your db is mysql');
      db = require('../database/mysql');
  //   } else {
  //     console.log('Stop node, restart and try again, valid options are mysql and mongo');
  //   }
  // });
});
