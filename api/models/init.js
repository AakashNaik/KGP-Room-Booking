const mongoose = require('mongoose')
const dotenv = require('dotenv');
mongoose.Promise = global.Promise
// console.log("workign till here");

console.log("Connecting to mongodb://localhost:27017");
mongoose.connect("mongodb://localhost:27017", { useMongoClient: true })

  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
