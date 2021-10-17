import { TodoItem } from "./store";

export  enum ACTION_TYPES {
    ADD_TODO  = 'ADD_TODO',
    REMOVE_TODO  = 'REMOVE_TODO'
} 

export interface TodoAction {
    type : ACTION_TYPES,
    payload : TodoItem
}

