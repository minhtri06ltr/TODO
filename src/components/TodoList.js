import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import StarIcon from "@material-ui/icons/Star";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
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
        <VerticalTimelineElement
          style={{
            color: "#fff",
            fontFamily: "monospace",
          }}
          date={"Let start our journey!"}
          iconStyle={{
            background: "rgb(212 ,143, 17)",
            color: "#fff",
          }}
          icon={<AlarmOnIcon color="action" />}
        />
        {todoList.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          );
        })}

        <VerticalTimelineElement
          style={{
            color: "#fff",
            fontFamily: "monospace",
          }}
          date={"Seem too easy right?"}
          iconStyle={{
            background: "rgba(35, 57 ,179,1)",
            color: "#fff",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
}

export default TodoList;
