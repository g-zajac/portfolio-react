import * as io from "socket.io-client";

import { toggleSwitch, slider } from "./actions";

// import socketIOClient from "socket.io-client";
// let proxyServer = "localhost:5000";
export let socket;

export const init = store => {
  if (!socket) {
    // socket = socketIOClient(proxyServer);
    socket = io("http://localhost:5000").connect();
    // socket.on("chatMessages", msgs => store.dispatch(toggleSwitch(msgs)));
    // socket.on("chatMessage", msg => store.dispatch(slider(msg)));
  }
  return socket;
};
