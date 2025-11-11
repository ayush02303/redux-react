import { createStore} from "redux"

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
  isLoading: false
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => index !== action.payload);
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};
// creating store in redux 
const store = createStore( taskReducer)
console.log(store)
console.log( "initial state" , store.getState())

// dispatch an action 
store.dispatch( { type : ADD_TASK, payload : "Hii there"})
console.log( "updated state" , store.getState())

store.dispatch( { type : ADD_TASK, payload : "Hii there twice now!"})
console.log( "updated state" , store.getState())

store.dispatch( { type : DELETE_TASK , payload : 1})