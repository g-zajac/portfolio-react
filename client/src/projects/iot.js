import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/lab/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { socket } from "../socket";

import Thermometer from "react-thermometer-component";
import Chart from "react-google-charts";

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

function Iot(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false
  });
  const [sensor, setTemp] = React.useState({ temperature: 0 });

  const toggleHandleChange = name => event => {
    console.log("toggle value: ", event.target.checked);
    socket.emit("toggleSwitch", event.target.checked);
    setState({ ...state, [name]: event.target.checked });
  };

  const toggleBulbChange = name => event => {
    console.log("toggle value: ", event.target.checked);
    socket.emit("toggleBulb", event.target.checked);
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
      <Link to="/#portfolio">
        <i className="far fa-times-circle fa-2x" />
      </Link>
      <div id="iot_container">
        <div id="esp_things">
          <div className={classes.root}>
            <div id="iot_socket">
              <i className="fas fa-plug fa-2x" />
              <Switch
                checked={state.checkedA}
                onChange={toggleHandleChange("checkedA")}
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
                max={255}
              />
            </div>
            <Switch
              checked={state.checkedB}
              onChange={toggleBulbChange("checkedB")}
              value="checkedB"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
          <div id="iot_temp">
            <Thermometer
              theme="light"
              value={props.temperature}
              max="40"
              steps="1"
              format="°C"
              size="normal"
              height="200"
            />
          </div>
          <div id="env">
            <p> Temperature: {props.temperature} </p>
            <p> Humidity: {props.humidity} % </p>
            <p> CO2: {props.co2} </p>
          </div>
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
    temperature: state.temperature,
    humidity: state.humidity,
    co2: state.co2
  };
};

export default connect(mapStateToProps)(Iot);

// <div id="test_chart" style={{ display: "flex", maxWidth: 900 }}>
//   <Chart
//     width={"100%"}
//     height={"400"}
//     chartType="LineChart"
//     loader={<div>Loading Chart</div>}
//     data={[
//       ["Date", "Value"],
//       [new Date(1996, 1, 1), 2000 * Math.random()],
//       [new Date(1997, 1, 1), 2000 * Math.random()],
//       [new Date(1998, 1, 1), 2000 * Math.random()],
//       [new Date(1999, 1, 1), 2000 * Math.random()],
//       [new Date(2000, 1, 1), 2000 * Math.random()],
//       [new Date(2001, 1, 1), 2000 * Math.random()],
//       [new Date(2002, 1, 1), 2000 * Math.random()],
//       [new Date(2003, 1, 1), 2000 * Math.random()],
//       [new Date(2004, 1, 1), 2000 * Math.random()],
//       [new Date(2005, 1, 1), 2000 * Math.random()],
//       [new Date(2006, 1, 1), 2000 * Math.random()],
//       [new Date(2007, 1, 1), 2000 * Math.random()],
//       [new Date(2008, 1, 1), 2000 * Math.random()],
//       [new Date(2009, 1, 1), 2000 * Math.random()]
//     ]}
//     options={{
//       // Use the same chart area width as the control for axis alignment.
//       chartArea: { height: "80%", width: "90%" },
//       hAxis: { slantedText: false },
//       vAxis: { viewWindow: { min: 0, max: 2000 } },
//       legend: { position: "none" },
//       backgroundColor: "transparent",
//       controlArea: { backgroundColor: "transparent" }
//     }}
//     rootProps={{ "data-testid": "3" }}
//     chartPackages={["corechart", "controls"]}
//     controls={[
//       {
//         controlType: "ChartRangeFilter",
//         options: {
//           filterColumnIndex: 0,
//           ui: {
//             chartType: "LineChart",
//             chartOptions: {
//               chartArea: { width: "90%", height: "50%" },
//               hAxis: { baselineColor: "none" }
//             }
//           }
//         },
//         controlPosition: "bottom",
//         controlWrapperParams: {
//           state: {
//             range: {
//               start: new Date(1997, 1, 9),
//               end: new Date(2002, 2, 20)
//             }
//           }
//         }
//       }
//     ]}
//   />
// </div>
