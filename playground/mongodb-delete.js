// const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

    // Delete many
    // db.collection('Todos')
    //   .deleteMany({ text: 'Eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // Delete one
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat lunch2' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // Find one and delete
    // db.collection('Todos')
    //   .findOneAndDelete({ text: 'Marcusssss' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users').deleteMany({ name: 'Marcus' });

    db.collection('Users')
      .findOneAndDelete({
        _id: new ObjectID('5c4825058722d641c7e982ae')
      })
      .then(result => {
        console.log(JSON.stringify(result, undefined, 2));
      });

    client.close();
  }
);
