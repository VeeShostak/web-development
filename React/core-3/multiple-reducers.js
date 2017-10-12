import { createStore, combineReducers } from 'redux';

// Reducer Function: Action describe the fact that 
// something happened but dont specify how app changes 
// in response. This is the job of reducers


// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// filter reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer =  (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
    return state;
  }

}


// Store creation

const store = createStore(
  combineReducers({
    // root state name(property), reducer that will manage it
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

// =============


const demoState = {
  expenses: [{
    id: 'hthrnnbrt',
    description: 'August Rent',
    note: 'This was the final payment for that address',
    amount: 97500,
    createdAt: 0 
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

