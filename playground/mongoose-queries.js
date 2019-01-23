const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/todo');
const { User } = require('./../server/model/user');

// var id = '5c48b520df2e129b81d9a1b81';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// })
//   .then(todos => {
//     console.log('Todos', todos);
//   })
//   .catch(err => console.log(err));

// Todo.findOne({
//   _id: id
// })
//   .then(todo => {
//     console.log('Todo', todo);
//   })
//   .catch(err => console.log(err));

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
//   })
//   .catch(err => console.log(err));

User.findById('5c489537151b8887107d0516').then(
  user => {
    if (!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  err => console.log(err)
);
