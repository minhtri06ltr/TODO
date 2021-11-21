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
    [
      {
        id: "0",
        title: "Do homework",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: false,
      },
      {
        id: "1",
        title: "Play game",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: true,
      },
      {
        id: "2",
        title: "Go to market",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: false,
      },
      {
        id: "3",
        title: "Cooking",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: true,
      },
      {
        id: "4",
        title: "Play with cat",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: true,
      },
      {
        id: "5",
        title: "Brush teeth",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: false,
      },
      {
        id: "6",
        title: "Take a shower",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: true,
      },
      {
        id: "7",
        title: "Eat dinner",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: false,
      },
      {
        id: "8",
        title: "Hang out with friend",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: false,
      },
      {
        id: "9",
        title: "Watch movie",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: false,
      },
      {
        id: "10",
        title: "Go to school",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: true,
      },
      {
        id: "11",
        title: "Do exercise",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: false,
      },
      {
        id: "12",
        title: "Walking a long street",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: true,
      },
      {
        id: "13",
        title: "Meeting",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: false,
      },
      {
        id: "14",
        title: "Go to beach",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "school",
        isCompleted: false,
      },
      {
        id: "15",
        title: "Learning new stuff",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, impedit?",
        deadline: "Sun Nov 15 2021 13:17:09",
        type: "work",
        isCompleted: true,
      },
    ],
  );
  console.log(todoList);

  //State
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    deadline: "",
    type: "",
  });
  const [updateType, setUpdateType] =
    useState("");
  const [updateTodo, setUpdateTodo] =
    useState(todo);
  const [openModal, setOpenModal] =
    useState(false);
  const [todoType, setTodoType] = useState("");

  //get todo when to do list change
  useEffect(() => {
    dispatch({
      type: SET_TODO,
      payload: {
        todoList: todoList,
      },
    });
  }, [todoList]);
  //Effect
  //get todo when page reload
  useEffect(() => {
    dispatch({
      type: GET_TODO,
      payload: todoList,
    });
  }, []);

  const ContextData = {
    todoList: todoList,
    dispatch,
    todoType,
    todo,
    setTodo,
    setTodoType,
    setOpenModal,
    openModal,
    updateType,
    setUpdateType,
    updateTodo,
    setUpdateTodo,
  };
  return (
    <TodoContext.Provider value={ContextData}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
