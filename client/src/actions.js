export function toggleSwitch(state) {
  return {
    type: "TOGGLE_SWITCH",
    switchState: state
  };
}

export function slider(value) {
  return {
    type: "SLIDER",
    sliderValue: value
  };
}

export function temperature(value) {
  console.log("received action temperature: ", value);
  return {
    type: "TEMPERATURE",
    temp: value
  };
}

export function humidity(value) {
  console.log("received action humidity: ", value);
  return {
    type: "HUMIDITY",
    hum: value
  };
}

export function co2(value) {
  return {
    type: "CO2",
    co2: value
  };
}
