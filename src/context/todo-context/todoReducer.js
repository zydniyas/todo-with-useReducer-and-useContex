import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";
import { initialState } from "./intialState";

export const todoReducer = (todos = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];

    case DELETE_TODO:
      return todos.filter((e) => e.id !== action.payload.id);

    case UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });

    default:
      return todos;
  }
};