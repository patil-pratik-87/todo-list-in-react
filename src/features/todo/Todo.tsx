import React, { Fragment } from "react";
import AddTodo from "./add-todo/AddTodo";
import TodoList from "./todo-list/TodoList";

interface TodoProps {
    
}
 
class Todo extends React.Component<TodoProps> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {todos:[]};
    }

    componentDidMount() {
        
    }
    render() { 
        return (  
            <div className="container">
                <h1>TODO List</h1>
                <AddTodo/>
                <TodoList></TodoList>
            </div>
    );
    }
} 
 
export default Todo;