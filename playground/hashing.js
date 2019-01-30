const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword =
  '$2a$10$dc7VvqckSWYpTR1jYGOgie/.ygOUdqayVhatOOvnCXQHnfisrcYGm';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

bcrypt.compare(
  'passwordgogogo',
  '$2a$10$mZ347YRVHYToYSnosroSwe1dLD.y6htP0lOX2JK/DMlZbIXEpsway',
  (err, res) => {
    console.log('testaaaa ', res);
  }
);

// data = { id: 100 };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
// console.log('decoded id', decoded.id);
// var message = 'I am user number 1';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// console.log('***********');

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.id=1
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// console.log(resultHash);
// console.log(token.hash);
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
