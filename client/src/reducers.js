export default function reducer(state = {}, action) {
  if (action.type === "SHOW_PROJECT") {
    return { ...state, showProject: action.projectId };
  }

  if (action.type === "TEMPERATURE") {
    return { ...state, temperature: action.temp };
  }
  return state;
}
