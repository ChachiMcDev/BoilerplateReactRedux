
import { createStore } from 'redux';


//Action generators - function that returns action objects


REDUX:
//Reducers
//	1.  reducers are pure functions ( a pure function is all inclusive, no global variables, no acts outside of local scope
//	2.  Never change state or action
//

const incrementCount = ( { incrementBy= 1 } = {}) => ({

        type: 'INCREMENT',
        incrementBy
    
    
});


const decrementCount = ({ decrementBy = 1 } = {} )=> ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count })=> ({
    type: 'SET',
    count
});

const resetCount = () =>({
    type: 'RESET'
})

//destructuring the first argument
const add = ({a, b}, { c, d }) =>({
     hmm: 'suckit',
     yup: a + b + c + d
});


console.log(add({a: 1, b: 200}, {c: 5, d: 1}))

const countReducer = ((state = {count: 0}, action)=>{

    switch(action.type){
        case 'INCREMENT':
           // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { 
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
          //  const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
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

    
});

const store = createStore(countReducer);

const subscribe = store.subscribe(()=>{
    console.log(store.getState());
});




store.dispatch(incrementCount({incrementBy:500}));


store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 20000}));

store.dispatch(resetCount());

//{
//    type: 'INCREMENT'
//}
//
//{
//    type: 'DECREMENT'
//}
//

//allows you to update





