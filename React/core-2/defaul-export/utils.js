console.log('utils.js running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a -b;



export { square, add , subtract as default};

// or defualt export inline:

// export default subtract;

// export default (a, b) => a -b;
