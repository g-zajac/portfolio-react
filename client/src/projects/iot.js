import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/lab/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { socket } from "../socket";
const useStyles = makeStyles({
  root: {
    width: 200
  }
});

function Iot(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true
  });
  const [sensor, setTemp] = React.useState({ temperature: 0 });

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

  console.log("props in iot: ", props);

  return (
    <div className="project" id="iot">
      <Link to="/">
        <i className="far fa-times-circle fa-2x" />
      </Link>
      <div id="iot_container">
        <div className={classes.root}>
          <div id="iot_socket">
            <i className="fas fa-plug fa-2x" />
            <Switch
              checked={state.checkedB}
              onChange={toggleHandleChange("checkedB")}
              value="checkedB"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
          <div id="iot_bulb">
            <i className="fas fa-lightbulb fa-2x" />
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
          <div>Temperature {props.temperature}</div>
        </div>
      </div>
    </div>
  );
}

function valuetext(value) {
  return `${value}°C`;
}

const mapStateToProps = state => {
  console.log("state.temp:", state.temperature);
  return {
    temperature: state.temperature
  };
};

export default connect(mapStateToProps)(Iot);
