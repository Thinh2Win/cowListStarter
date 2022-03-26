const express = require('express');
const db = require('../database/mysql').db;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());



app.get('/cows', (req, res) => {
  db.query('SELECT * FROM cows', (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(data);
    }
  });

  // db.promise().query('SELECT * FROM cows')
  //   .then(data => {
  //     res.send(data[0]);
  //   })
  //   .catch(err => {
  //     res.status(404).send(err);
  //   });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
  // readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice => {
  //   // choice = 'mongo';
  //   if (choice === 'mongo') {
  //     console.log('Your db is Mongo');
  //     db = require('../database/mongo');
  //   } else if (choice === 'mysql') {
  //     console.log('Your db is mysql');
  //     db = require('../database/mysql').db;
  //   } else {
  //     console.log('Stop node, restart and try again, valid options are mysql and mongo');
  //   }
  // });
});