const mongoose = require('mongoose');
const data = require('./data.js').data;

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo');
  // seedCows(data);

});

const cowSchema = new mongoose.Schema({
  cow: String,
  about: String
});

const Cow = mongoose.model('Cow', cowSchema);

var seedCows = (cowArray) => {

  Cow.insertMany(cowArray)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
};



module.exports.mdb = Cow;