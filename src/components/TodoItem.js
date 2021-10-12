import React, { useContext } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {
  DELETE_TODO,
  MARK_TODO,
} from "../reducers/types";
import { TodoContext } from "../contexts/TodoContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todo }) {
  const { dispatch, setOpenModal } =
    useContext(TodoContext);
  let type = {};
  let icon = <WorkIcon />;
  let markTodo = { wordBreak: "break-all" };

  if (todo.isCompleted === true) {
    type = {
      background: "rgb(103, 172, 82)",
      color: "rgba(253 ,245 ,1,1)",
    };
    markTodo = {
      wordBreak: "break-all",
      textDecoration: "line-through",
    };
    icon = (
      <CheckCircleOutlineIcon
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
  } else if (todo.type === "work") {
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
  const openModalHandler = (e) => {
    setOpenModal(true);
  };
  return (
    <VerticalTimelineElement
      style={markTodo}
      className="vertical-timeline-element--work"
      contentStyle={type}
      contentArrowStyle={{
        borderRight:
          "7px solid  rgb(33, 150, 243)",
      }}
      date={todo.deadline.split("G")[0]}
      iconStyle={type}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">
        {todo.title}
      </h3>
      <p>{todo.description}</p>
      <div
        style={{
          marginTop: "20px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Button
          style={{
            color: "black",
            border: "2px solid black",
            fontWeight: "bold",
          }}
          onClick={() => {
            dispatch({
              type: DELETE_TODO,
              payload: {
                id: todo.id,
              },
            });
          }}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          style={{
            color: "black",
            border: "2px solid black",
            fontWeight: "bold",
          }}
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={openModalHandler}
        >
          Update
        </Button>
      </div>
    </VerticalTimelineElement>
  );
}

export default TodoItem;
