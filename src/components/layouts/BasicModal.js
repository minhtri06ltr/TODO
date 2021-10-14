import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import UseRadioGroup from "./UseRadioGroup";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { UPDATE_TODO } from "../../reducers/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const {
    openModal,
    setOpenModal,
    dispatch,
    todo,
    updateTodo,
    setUpdateTodo,
  } = useContext(TodoContext);

  //content change when choose different to do
  useEffect(() => {
    setUpdateTodo(todo);
  }, [todo]);

  const inputHandler = (e) => {
    setUpdateTodo({
      ...updateTodo,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = () => {
    dispatch({
      type: UPDATE_TODO,
      payload: updateTodo,
    });
    setOpenModal(false);
  };
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{ backgroundColor: "black" }}
        >
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
              name="title"
              variant="outlined"
              required
              value={updateTodo.title}
              onChange={inputHandler}
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              name="description"
              fullWidth
              id="fullWidth"
              rows={4}
              required
              value={updateTodo.description}
              label="Description"
              name="description"
              onChange={inputHandler}
            />
            <div>
              <UseRadioGroup
                type={updateTodo.type}
                setUpdateTodo={setUpdateTodo}
                updateTodo={updateTodo}
              />
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
                  name="deadline"
                  label="Choose your deadline"
                  value={updateTodo.deadline}
                  minDateTime={new Date()}
                  onChange={(newValue) => {
                    setUpdateTodo({
                      ...updateTodo,
                      deadline:
                        newValue.toString(),
                    });
                  }}
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
                onClick={submitHandler}
                variant="outlined"
                endIcon={<ArrowCircleUpIcon />}
                size="large"
                style={{
                  border: "2px solid ",
                  fontWeight: "bold",
                  color: "#0bff17",
                }}
              >
                Update
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
