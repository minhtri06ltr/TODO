import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { todoReducer } from "../reducers/TodoReducer";
import {
  GET_TODO,
  SET_TODO,
} from "../reducers/types";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(
    todoReducer,
    [],
  );
  //get todo when page reload
  useEffect(() => {
    dispatch({
      type: GET_TODO,
      payload: null,
    });
  }, []);
  //get todo when to do list change
  useEffect(() => {
    dispatch({
      type: SET_TODO,
      payload: {
        todoList: todoList,
      },
    });
  }, [todoList]);
  const ContextData = {
    todoList: todoList,
    dispatch,
  };
  return (
    <TodoContext.Provider value={ContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
