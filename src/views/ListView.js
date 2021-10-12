import React from "react";
import BasicModal from "../components/layouts/BasicModal";

import TodoList from "../components/TodoList";

function ListView() {
  return (
    <div>
      <TodoList />
      <BasicModal />
    </div>
  );
}

export default ListView;
