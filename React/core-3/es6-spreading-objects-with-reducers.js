import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Reducer Function: Action describe the fact that 
// something happened but dont specify how app changes 
// in response. This is the job of reducers

// Generators (generate action objs)

// ADD_EXPENSE
const addExpense = (
  {
    // destructure args
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      // set properties using shorthand syntax
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
};


// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
};

// EDIT_EXPENSE

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}
// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
};

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      // spread operator. never change that state
      return [
        ...state, // spread all values of arr here
        action.expense
      ];
      case 'REMOVE_EXPENSE':
        // destructure the expense arr and get id
        return state.filter(( {id} ) => {
          return action.id !== id;
        });
      case 'EDIT_EXPENSE':
        // destructure the expense arr and get id
        return state.map(( expense ) => {
          if(expense.id === action.id) {
            return {
              ...expense, // destructure original object
              ...action.updates // ovverride passed down values
            };
          } else {
            return expense;
          }
        });
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
      
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

store.subscribe(() => {
  console.log(store.getState());

});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));

const expenseTwo = store.dispatch(addExpense({description: 'Groceries', amount: 2500}));

// note: destructure and get id
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300}));

store.dispatch(setTextFilter('Rent'));

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


// es6 spreading object
const user = {
  name: 'Jen',
  age: 24
};

console.log({
  ...user,
  location: 'New York', // add new property
  age: 27 // override age
});
