import { useContext, useState } from "react";
import { deleteTodo, updateTodo } from "../context/todo-context/actions";
import TodoContext from "../context/todo-context/TodoContext";

function SingleTodo({ todo }) {
  const [edit, setEdit] = useState(false);
  const { dispatch } = useContext(TodoContext);
  const [inputFeild, setInputFeild] = useState(todo.text);
  return (
    <div>
      {edit ? (
        <div>
          <input
            onChange={(e) => setInputFeild(e.target.value)}
            type="text"
            value={inputFeild}
          />
          <button
            onClick={() => {
              dispatch(updateTodo({ id: todo.id, text: inputFeild }));
              setEdit(false);
            }}
          >
            EDIT
          </button>
        </div>
      ) : (
        <div>
          {todo.text}
          <button onClick={() => dispatch(deleteTodo(todo))}>DELETE</button>
          <button onClick={() => setEdit(true)}>EDIT</button>
        </div>
      )}
    </div>
  );
}

export default SingleTodo;
