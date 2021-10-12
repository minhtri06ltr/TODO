import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

import { v4 } from "uuid";

import SendIcon from "@mui/icons-material/Send";

import UseRadioGroup from "./UseRadioGroup";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

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
  const { openModal, setOpenModal } =
    useContext(TodoContext);
  console.log(openModal);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        Open modal
      </Button>
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
                  value={new Date()}
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
        </Box>
      </Modal>
    </div>
  );
}
