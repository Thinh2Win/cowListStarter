const express = require('express');
// const db = require('../database/mysql').db;
const mdb = require('../database/mongo').mdb;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());



//---------> MONGO <---------//

app.get('/cows', (req, res) => {
  mdb.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


//---------> MYSQL <---------//
// app.get('/cows', (req, res) => {
//   db.query('SELECT * FROM cows', (err, data) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.send(data);
//     }
//   });

// db.promise().query('SELECT * FROM cows')
//   .then(data => {
//     res.send(data[0]);
//   })
//   .catch(err => {
//     res.status(404).send(err);
//   });
// });

// app.post('/cows/add', (req, res) => {

//   db.query(`INSERT INTO cows (cow, about) VALUES ('${req.body.cow}',  '${req.body.about}')`, err => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.send(req.body);
//     }
//   });
// });

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