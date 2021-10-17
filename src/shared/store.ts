import {
  createStore,
  combineReducers,
} from "@reduxjs/toolkit";

import todos from '../features/todo.reducer'

export interface TodoState {
  todos: TodoItem[];
}

export interface TodoItem {
  description: string;
}


const rootReducer = combineReducers({
  todos
});

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
