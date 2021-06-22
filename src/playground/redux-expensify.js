import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid'


//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const setSortByDateFilter = () => ({
    type: 'SORT_BY_DATE'
});


//SORT_BY_AMOUNT
const setSortByAmountFilter = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expenses reducer





const expensesReducerDefaultState = [];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });
        default:
            return state;
    };
};


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};




const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        //figure out if expense.description has the text variable string inside of it

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if( sortBy === 'date'){
            return a.createdAt - b.createdAt;
        }else if(sortBy === 'amount'){    
              return b.amount - a.amount;     
        }
    })


}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses, state.filters);
});


const expenseOne = store.dispatch(addExpense({ description: 'mortgage', amount: 2220, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 101, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'tea', amount: 500000, createdAt: 1100 }));
const expenseFour = store.dispatch(addExpense({ description: 'milk', amount: 40, createdAt: 2200 }));
const expenseFive = store.dispatch(addExpense({ description: 'eggs', amount: 22, createdAt: -5 }));


//store.dispatch(setTextFilter('ffe'));
//
////FILTERS
//
store.dispatch(setSortByAmountFilter());
//
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 22555 }));
//
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
store.dispatch(setSortByDateFilter());
//store.dispatch(setTextFilter());
//
//store.dispatch(setStartDate(0))
//store.dispatch(setEndDate(999))
//store.dispatch(setTextFilter('mort'));
//

const demoState = {
    expenses: [{
        id: 'dldklaasf',
        description: 'jan rent',
        note: 'final address payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};






////////////////////////////////////////////////////////////////////////////////////


