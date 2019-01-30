const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => console.log(result));

// Todo.findOneAndRemove({ text: 'abc' }).then(result => console.log(result));

// Todo.findByIdAndRemove('5c4a006e6102986b3a7b7e19').then(result =>
//   console.log(result)
// );
