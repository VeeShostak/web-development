//arguments object - no longer bound with arrow functions
//(cant access arguments)

// this keyword - no longer bound with arrow functions



// const add = function(a,b) {
//   console.log(arguments);
//   return a + b;
// };
// console.log(add(55,1, 1001));


const add = (a,b) => {
  // cant access args
  //console.log(arguments);
  return a + b;
};
console.log(add(55,1, 1001));


// this

const user = {
  name: 'Andrew',
  cities: ['Texas', 'New York', 'Dublin'],
  // if use arrow function here this value doesnt bind to oject, but
  // to parent scope (which is the global scope, undefined)


  // printPLacesLived: function () {
  // method
  printPLacesLived() {
    console.log(this.name);
    console.log(this.cities);

    // return this.cities.map((city) => {
    //   return this.name + ' has lived in ' + city;
    //
    // });
    return this.cities.map((city) => this.name + ' has lived in ' + city);


    // this bound to the object,
    // but for anonymous function no bound this value
    // can do that = this (access that whenever you want)

    // this.cities.forEach(function (city) {
    //   console.log(this.name + ' lived in ' + city);
    // });

    // for arrow functions:
    // this value is of the context they were created in
    // here we use its parents this value

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' lived in ' + city);
    // });


  }


};
console.log(user.printPLacesLived());


// ======
// map


const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
