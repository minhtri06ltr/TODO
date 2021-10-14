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
  //Reducer
  const [todoList, dispatch] = useReducer(
    todoReducer,
    [],
  );

  //State
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    deadline: "",
    type: "",
  });
  const [openModal, setOpenModal] =
    useState(false);
  const [todoType, setTodoType] = useState("");
  //Effect
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
    todo,
    setTodo,
    setTodoType,
    setOpenModal,
    openModal,
  };
  return (
    <TodoContext.Provider value={ContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
