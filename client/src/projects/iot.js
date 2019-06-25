import React from "react";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/lab/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { socket } from "../socket";
const useStyles = makeStyles({
  root: {
    width: 200
  }
});

export function Iot() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true
  });

  const toggleHandleChange = name => event => {
    console.log("toggle value: ", event.target.checked);
    socket.emit("toggleSwitch", event.target.checked);
    setState({ ...state, [name]: event.target.checked });
  };

  const [value, setValue] = React.useState(30);
  const sliderHandleChange = (event, newValue) => {
    console.log("slider value: ", newValue);
    socket.emit("sliderValue", newValue);
    setValue(newValue);
  };

  return (
    <div className="project" id="iot">
      <div className={classes.root}>
        Lamp
        <Switch
          checked={state.checkedB}
          onChange={toggleHandleChange("checkedB")}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Slider
          defaultValue={30}
          onChange={sliderHandleChange}
          getAriaValueText={valuetext}
          aria-labelledby="continuous-slider"
          valueLabelDisplay="auto"
          marks
          min={0}
          max={100}
        />
      </div>
    </div>
  );
}

function valuetext(value) {
  return `${value}°C`;
}
