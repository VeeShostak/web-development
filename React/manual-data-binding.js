// Efficiency when rerendering:
// React uses comments to be as efficient as possible.
// React uses virtual DOM algorithms in js (runs in js)
// to determine minimal number of changes that need to be made
// in order to rerender (do things need to be
// remved and replaced? or only a part of it?)

let count = 0;
const addOne = () => {
  count++;
  console.log(count);
  renderCounterApp();
};
const minusOne = () => {
  count--;
  console.log(count);
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
}


const appRoot = document.getElementById('app');



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );


  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
