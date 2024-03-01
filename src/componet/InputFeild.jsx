import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../context/todo-context/TodoContext";
import { addTodo } from "../context/todo-context/actions";

function InputFeild() {
  const [inputValue, setInputValue] = useState("");
  const { dispatch, todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo({ id: uuidv4(), text: inputValue, checked: false }));
        setInputValue("");
      }}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button type="submit">add</button>
    </form>
  );
}

export default InputFeild;
