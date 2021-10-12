import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
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
  const [todoType, setTodoType] = useState("");
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
    todoType,
    setTodoType,
  };
  return (
    <TodoContext.Provider value={ContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
