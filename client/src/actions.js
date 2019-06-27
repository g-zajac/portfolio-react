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
  return {
    type: "TEMPERATURE",
    temp: value
  };
}
