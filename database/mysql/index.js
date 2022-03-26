const mysql = require('mysql2');
var data = [
  {cow: 'Buttercup',
    about: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'
  },
  {cow: 'Milkshake',
    about: 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.'
  },
  {cow: 'Bessie',
    about: 'a persons best or closest friend.'
  },
  {cow: 'MooDonna',
    about: 'archaic : lady -- used as a form of respectful address..'
  },
  {cow: 'MooLawn',
    about: 'a legendary Chinese warrior from the Northern and Southern dynasties period (420-589) of Chinese history.'
  }
];
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowcow'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
    // seedData(data);
  }
});


var seedData = (cowArray) => {
  cowArray.forEach(cow => {
    connection.query(
      `INSERT INTO cows (cow, about) VALUES ('${cow.cow}', '${cow.about}')`
    );
  });
};



// Don't forget to export your functions!
module.exports.db = connection;
