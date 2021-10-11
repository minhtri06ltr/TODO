import React, {
  useState,
  useContext,
} from "react";
import { v4 } from "uuid";
import { ADD_TODO } from "../reducers/types";
import { TodoContext } from "../contexts/TodoContext";
function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const inputTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const inputDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch({
        type: ADD_TODO,
        payload: {
          todo: {
            id: v4(),
            title: title,
            description: description,
            isComplete: false,
          },
        },
      });
      setTitle("");
      setDescription("");
    } else {
      alert("Please check input again");
    }
  };
  return (
    <div>
      <div
        style={{
          padding: "10px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="To do title"
          value={title}
          onChange={inputTitleHandler}
          style={{
            padding: "10px",
          }}
        />
        <input
          type="textarea"
          name="description"
          placeholder="Description"
          value={description}
          onChange={inputDescriptionHandler}
          style={{
            marginTop: "10px",
            height: "150px",
            padding: "12px 20px",
            boxSizing: "border-box",
            border: "2px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f8f8f8",
            resize: "none",
          }}
        />
      </div>
      <button
        onClick={addHandler}
        style={{
          margin: "10px auto",
          display: "block",
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
