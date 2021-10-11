import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import StarIcon from "@material-ui/icons/Star";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function TodoList() {
  const { todoList } = useContext(TodoContext);
  return (
    <>
      <VerticalTimeline>
        {todoList.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          );
        })}

        <VerticalTimelineElement
          iconStyle={{
            background: "rgb(16, 204, 82)",
            color: "#fff",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
}

export default TodoList;
