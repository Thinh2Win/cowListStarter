const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo');
});

const cowSchema = new mongoose.Schema({
  /*
    Fill me in
  */
});

const Cow = mongoose.model('Cow', cowSchema);

module.exports = Cow;