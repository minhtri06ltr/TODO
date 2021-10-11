import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

function TodoItem({ todo, count }) {
  let type = {};
  let icon = <WorkIcon />;
  console.log(count);
  if (todo.isComplete === true) {
    type = {
      background: "rgb(16, 204, 82)",
      color: "#fff",
    };
    let icon = <StarIcon />;
  }
  if (count % 2 !== 0) {
    type = {
      background: "rgb(233, 30, 99)",
      color: "#fff",
    };
    icon = <WorkIcon />;
  } else {
    type = {
      background: "rgb(33, 150, 243)",
      color: "#fff",
    };
    icon = <SchoolIcon />;
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
