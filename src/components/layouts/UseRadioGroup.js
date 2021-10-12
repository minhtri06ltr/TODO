import * as React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, {
  useRadioGroup,
} from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { TodoContext } from "../../contexts/TodoContext";

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

export default function UseRadioGroup() {
  const { setTodoType } = useContext(TodoContext);
  const inputTypeHandler = (e) => {
    setTodoType(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <RadioGroup
        name="use-radio-group"
        defaultValue="first"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <MyFormControlLabel
          value="work"
          label="Work"
          control={<Radio />}
          onChange={inputTypeHandler}
        />
        <MyFormControlLabel
          value="school"
          label="School"
          control={<Radio />}
          onChange={inputTypeHandler}
        />
      </RadioGroup>
    </>
  );
}
