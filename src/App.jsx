import InputFeild from "./componet/InputFeild";
import TodoBody from "./componet/TodoBody";
import { TodoDataProvider } from "./context/todo-context/TodoContext";

function App() {
  return (
    <TodoDataProvider>
      <InputFeild />
      <TodoBody />
    </TodoDataProvider>
  );
}

export default App;
