import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import { MARK_TODO } from "../reducers/types";
import { TodoContext } from "../contexts/TodoContext";

function TodoItem({ todo, count }) {
  const { dispatch } = useContext(TodoContext);
  let type = {};
  let icon = <WorkIcon />;

  if (todo.isCompleted === true) {
    type = {
      background: "rgb(16, 204, 82)",
      color: "gray",
    };
    icon = (
      <StarIcon
        onClick={() => {
          dispatch({
            type: MARK_TODO,
            payload: {
              id: todo.id,
            },
          });
        }}
        style={{ cursor: "pointer" }}
      />
    );
  } else if (count % 2 !== 0) {
    type = {
      background: "rgb(233, 30, 99)",
      color: "#fff",
    };
    icon = (
      <WorkIcon
        onClick={() => {
          dispatch({
            type: MARK_TODO,
            payload: {
              id: todo.id,
            },
          });
        }}
        style={{ cursor: "pointer" }}
      />
    );
  } else {
    type = {
      background: "rgb(33, 150, 243)",
      color: "#fff",
    };
    icon = (
      <SchoolIcon
        onClick={() => {
          dispatch({
            type: MARK_TODO,
            payload: {
              id: todo.id,
            },
          });
        }}
        style={{ cursor: "pointer" }}
      />
    );
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={type}
      contentArrowStyle={{
        borderRight:
          "7px solid  rgb(33, 150, 243)",
      }}
      date={todo.deadline.toString()}
      iconStyle={type}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">
        {todo.title}
      </h3>
      <p>{todo.description}</p>
    </VerticalTimelineElement>
  );
}

export default TodoItem;
