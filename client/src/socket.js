import * as io from "socket.io-client";

import { toggleSwitch, slider, temperature } from "./actions";

// import socketIOClient from "socket.io-client";
// let proxyServer = "localhost:5000";
export let socket;

export const init = store => {
  if (!socket) {
    // socket = socketIOClient(proxyServer);
    socket = io("http://localhost:5000").connect();
    socket.on("temperature", msgs => store.dispatch(temperature(msgs)));
    // socket.on("chatMessage", msg => store.dispatch(slider(msg)));
  }
  return socket;
};
