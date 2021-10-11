import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

function TodoItem({ todo }) {
  console.log("hi");
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgb(33, 150, 243)",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight:
          "7px solid  rgb(33, 150, 243)",
      }}
      date="2011 - present"
      iconStyle={{
        background: "rgb(33, 150, 243)",
        color: "#fff",
      }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        {todo.title}
      </h3>

      <p>{todo.description}</p>
    </VerticalTimelineElement>
  );
}

export default TodoItem;
