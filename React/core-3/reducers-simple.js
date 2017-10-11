import { createStore } from 'redux';


// action generator functions: that generate(return) action objects
// (action object: obj that gets sent to the store)

// (note: using  implicit object return syntax)
// (provide default value if passed arg undefined)
// NOTE: destructure arguments that get passed dinto functions
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //const incrementBy = typeof payload.incrementBy === 'number' ? payload.incrementBy : 1;
    incrementBy
  });
  
  const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
  });
  
  const setCount = ({ count }) => ({
    type: 'SET',
    count
  });
  
  const resetCount = () => ({
    type: 'RESET'
  });

// Reducer Function: Action describe the fact that 
// something happened but dont specify how app changes 
// in response. This is the job of reducers

// reducers:
// 1. reducers are pure functions. output only determined by the input
// (doesnt use or change anything outside of the function scope)
// 2. never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;

    }
    
};

// pass function in, which gets called once right away
const store = createStore(countReducer);

// called everytime store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState(store.getState()));
})


store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(setCount({ count: 250 }));
