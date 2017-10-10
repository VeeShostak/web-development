import { createStore } from 'redux';

// default state value
// pass function in, which gets called once right away
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
        return {
            count: state.count - 1
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
            return state;

    }
    
});

console.log(store.getState(store.getState()));

// action: object that gets sent to the store
store.dispatch(
{
    type: 'INCREMENT'
});

console.log(store.getState(store.getState()));

store.dispatch(
{
    type: 'DECREMENT'
});

store.dispatch(
{
    type: 'RESET'
});

console.log(store.getState(store.getState()));
