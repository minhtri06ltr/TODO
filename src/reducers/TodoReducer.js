import {
  MARK_TODO,
  GET_TODO,
  SET_TODO,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./types";

export const todoReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);
  console.log(state);
  switch (type) {
    case GET_TODO:
      const todoList =
        localStorage.getItem("todoList");
      if (todoList) state = JSON.parse(todoList);

      return state;

    case SET_TODO:
      localStorage.setItem(
        "todoList",
        JSON.stringify(payload.todoList),
      );

      return state;
    case UPDATE_TODO:
      const updateTodo = state.map((todo) => {
        return todo.id === payload.id
          ? payload
          : todo;
      });
      return updateTodo;

    case ADD_TODO:
      return [payload.todo, ...state];
    case DELETE_TODO:
      return state.filter(
        (todo) => todo.id !== payload.id,
      );
    case MARK_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id)
          todo.isCompleted = !todo.isCompleted;
        return todo;
      });
    default:
      return state;
  }
};
