import { ACTION_TYPES, TodoAction } from "../shared/actions";
import { TodoState } from "../shared/store";


// reducer returns modified state
const todos = (
    state: TodoState = { todos: [] },
    action: TodoAction
  ) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_TODO:
   
        state.todos.push(action.payload)
        console.log('Action Triggered');
        return {...state};
      
        case ACTION_TYPES.REMOVE_TODO:
   
       state.todos =  state.todos.filter(todo => todo !== action.payload)
        console.log('Remove Action Triggered');
        return {...state};
  
      default:
        return state;
    }
  };

  export default todos;