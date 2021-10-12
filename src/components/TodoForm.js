import React, {
  useState,
  useContext,
} from "react";
import { v4 } from "uuid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ADD_TODO } from "../reducers/types";
import { TodoContext } from "../contexts/TodoContext";
import UseRadioGroup from "./layouts/UseRadioGroup";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function TodoForm() {
  //Context
  const { dispatch, todoType } =
    useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(new Date());
  const [description, setDescription] =
    useState("");
  //Function
  const inputTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const inputDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (
      title &&
      todoType &&
      description &&
      value
    ) {
      dispatch({
        type: ADD_TODO,
        payload: {
          todo: {
            id: v4(),
            title: title,
            description: description,
            isCompleted: false,
            deadline: value.toString(),
            type: todoType,
          },
        },
      });
      setTitle("");
      setDescription("");
      setValue(null);
    } else {
      alert("Please check input again");
    }
  };
  //render
  return (
    <div>
      <TextField
        style={{
          margin: "20px 0",
          borderColor: "yellow !important",
        }}
        fullWidth
        id="outlined-basic"
        id="fullWidth"
        label="Title"
        value={title}
        onChange={inputTitleHandler}
        variant="outlined"
        required
      />
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        fullWidth
        id="fullWidth"
        rows={4}
        required
        label="Description"
        name="description"
        value={description}
        onChange={inputDescriptionHandler}
      />
      <div>
        <UseRadioGroup />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
        >
          <DateTimePicker
            renderInput={(params) => (
              <TextField {...params} />
            )}
            label="Choose your deadline"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minDateTime={new Date()}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        <Button
          onClick={addHandler}
          variant="outlined"
          endIcon={<SendIcon />}
          size="large"
          style={{
            border: "2px solid ",
            fontWeight: "bold",
            color: "#0bff17",
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default TodoForm;
