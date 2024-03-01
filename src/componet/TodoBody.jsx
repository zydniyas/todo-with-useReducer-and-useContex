import { useContext } from "react";
import SingleTodo from "./SingleTodo";
import TodoContext from "../context/todo-context/TodoContext";

function TodoBody() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo, index) => (
        <SingleTodo todo={todo} key={index} />
      ))}
    </div>
  );
}

export default TodoBody;
