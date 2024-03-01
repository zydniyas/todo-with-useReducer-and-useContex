import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};


export const updateTodo = (data) => { 
  return {
    type: UPDATE_TODO,
    payload: data,
  };
}

