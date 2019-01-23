// const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Show mongo obj ID
// var obj = new ObjectID();
// console.log(obj);

// var user = { name: 'Marcus', age: 99 };
// var { name } = user;
// console.log(name);

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

    db.collection('Todos')
      .find({
        // completed: false
        _id: new ObjectID('5c4821224ce9593c6e5c0c9c')
      })
      .toArray()
      .then(
        docs => {
          console.log('Todos');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log('Unable to fetch todos', err);
        }
      );

    db.collection('Todos')
      .find()
      .count()
      .then(
        count => {
          console.log(`Todos's docs total count: ${count}`);
        },
        err => {
          console.log('Unable to fetch todos', err);
        }
      );

    db.collection('Users')
      .find({ name: 'Chloes' })
      .toArray()
      .then(
        docs => {
          if (docs[0] === undefined) {
            return console.log('No data to fetch');
          }
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log('Unable to fetch data', err);
        }
      );

    client.close();
  }
);
