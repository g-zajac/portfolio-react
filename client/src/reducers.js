export default function reducer(state = {}, action) {
  if (action.type === "SHOW_PROJECT") {
    return { ...state, showProject: action.projectId };
  }

  if (action.type === "TEMPERATURE") {
    return { ...state, temperature: action.temp };
  }

  if (action.type === "HUMIDITY") {
    return { ...state, humidity: action.hum };
  }

  if (action.type === "CO2") {
    return { ...state, co2: action.co2 };
  }

  return state;
}
