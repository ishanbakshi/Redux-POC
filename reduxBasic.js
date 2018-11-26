const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter:0
}
//Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return  Object.assign({},state,{
        counter: state.counter+1
      });
    case 'INCREMENT_BY':
      return  Object.assign({},state,{
        counter: state.counter+action.value
      });
    default:
     return state;
  }
};


//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});


//Dispatching Action
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT_BY', value:4});
store.dispatch({type:'INCREMENT_BY', value:6});



