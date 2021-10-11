import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function ListView() {
  return (
    <div style={{ backgroundColor: "#2A0944" }}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default ListView;
