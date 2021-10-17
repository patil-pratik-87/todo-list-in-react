import * as React from "react";
import { useSelector } from "react-redux";
import { RootState, TodoItem } from "../../../shared/store";
import TodoRow from "./todo-row/TodoRow";

interface TodoListProps {}

interface TodoListState {}

const TodoList: React.FunctionComponent<TodoListProps> = () => {
  const todoState = useSelector((state) => (state as RootState).todos);
  let count = 0;

  return (
    <div className="list-container">
      {todoState.todos.map((todo: TodoItem) => (
        <TodoRow key={++count} item={todo}></TodoRow>
      ))}
    </div>
  );
};

export default TodoList;
