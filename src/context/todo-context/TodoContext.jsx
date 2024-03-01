/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { initialState } from "./intialState";

const TodoContext = createContext({});

export const TodoDataProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
