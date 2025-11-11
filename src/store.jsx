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


export const addTask = ( data )=> {
    return { type : ADD_TASK , payload : data}
}

export const deleteTask = ( idx )=>{
    return { type : DELETE_TASK , payload : idx}
}

// creating store in redux 
export const store = createStore( taskReducer)
console.log(store)
console.log( "initial state" , store.getState())

// dispatch an action 
store.dispatch(addTask("Hii there"))
console.log( "updated state" , store.getState())

store.dispatch( addTask("Hii there once again !"))
console.log( "updated state" , store.getState())

store.dispatch( deleteTask(1))
console.log( "deleted state" , store.getState())

// create action creators 
