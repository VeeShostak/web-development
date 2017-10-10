// const person = {
//   name: 'John',
//   age: 23,
//   location: {
//     city: 'New York',
//     temp: 72
//   }
// };

// // variable type we're trying to create = object trying to destructure
// // renaming syntax: temp: temperature, optional default values
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }



const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published
