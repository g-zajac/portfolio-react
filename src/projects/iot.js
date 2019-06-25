import React from "react";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/lab/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

export function Iot() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    console.log("slider value: ");
    setState({ ...state, [name]: event.target.checked });
  };

  const [value, setValue] = React.useState(30);
  const sliderHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="project" id="iot">
      <div className={classes.root}>
        Lamp
        <Switch
          checked={state.checkedB}
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Slider
          defaultValue={30}
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
