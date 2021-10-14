import * as React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, {
  useRadioGroup,
} from "@mui/material/RadioGroup";
import { pink } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { TodoContext } from "../../contexts/TodoContext";
import FormLabel from "@mui/material/FormLabel";
const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <StyledFormControlLabel
      checked={checked}
      {...props}
    />
  );
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function UseRadioGroup({ type }) {
  const {
    setTodoType,
    updateTodo,
    setUpdateTodo,
  } = useContext(TodoContext);
  const inputTypeHandler = (e) => {
    setTodoType(e.target.value);
    setUpdateTodo({
      ...updateTodo,
      type: e.target.value,
    });
  };
  return (
    <>
      <FormLabel
        component="legend"
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Choose your todo type
      </FormLabel>
      <RadioGroup
        name="use-radio-group"
        defaultValue={type}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <MyFormControlLabel
          value="work"
          label="Work"
          control={
            <Radio
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          onChange={inputTypeHandler}
        />
        <MyFormControlLabel
          value="school"
          label="School"
          control={
            <Radio
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          onChange={inputTypeHandler}
        />
      </RadioGroup>
    </>
  );
}
