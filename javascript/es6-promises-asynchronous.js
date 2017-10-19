

// asynchronous js

// resolve we got the data. reject, something went wrong
// resolve or reject only a single time
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'John',
    //   age: 23
    // });
    reject('Error message');
  }, 6000);
});

console.log('before');

// .then() register a callback when and if a promise resolves
promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});


console.log('after');


// before, after, then 6s later error prints

// most of the time promises are made by the library (like firebase),
// we just have to handle them


// =================
// promise chaining 

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'John',
      age: 23
    });
    // reject('Error message');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return 'some data';
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
