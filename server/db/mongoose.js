const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true }
);

console.log(process.env.MONGODB);
module.exports = { mongoose };
