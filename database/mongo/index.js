const mongoose = require('mongoose');
const data = require('./data.js').data;

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo');
});

const cowSchema = new mongoose.Schema({
  cow: String,
  about: String
});

const Cow = mongoose.model('Cow', cowSchema);

var seedCows = (cowArray) => {
  // cowArray.forEach(cow => {
  //   new Cow({cow: `${cow.cow}`,
  //     about: `${cow.about}`,
  //   });
  // });
  Cow.insertMany(cowArray)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
};

// seedCows(data);

module.exports = Cow;