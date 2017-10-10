import { createStore } from 'redux';

// default state value
// pass function in, which gets called once right away
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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
    
});

// called everytime store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState(store.getState()));
})

// action: object that gets sent to the store
store.dispatch(
{
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(
{
    type: 'DECREMENT',
    decrementBy: 2
});

store.dispatch(
{
    type: 'SET',
    count: 25
});

store.dispatch(
{
    type: 'RESET'
});

