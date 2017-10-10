// ====================
// OBEJCT DESTRUCTURING

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



// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published


// ====================
// ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'California'] = address;

// console.log(`You are in ${city}, ${state}.`);



const item = ['Coffee', '$2.00', '$2.75', '$3.50'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

