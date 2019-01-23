const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true }
);

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   //   text: 'Eat an apple'
//   text: 'do some thing'
// });

// newTodo.save().then(
//   doc => {
//     console.log('Saved todo', doc);
//   },
//   err => {
//     console.log('Unable to save', err);
//   }
// );

// var otherTodo = new Todo({
//   //   text: 'Feed the dog',
//   //   completed: true,
//   //   completedAt: 123
//   text: 'to do something'
// });

// otherTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   err => {
//     console.log('Unable to save', err);
//   }
// );

// User model
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'marcuschui@icloud.com'
});

newUser.save().then(
  doc => {
    console.log(JSON.stringify(doc, undefined, 2));
  },
  err => {
    console.log('Unable to save', err);
  }
);
