import * as io from "socket.io-client";

import { toggleSwitch, slider } from "./actions";

export let socket;

export const init = store => {
  if (!socket) {
    socket = io.connect();
    socket.on("chatMessages", msgs => store.dispatch(toggleSwitch(msgs)));
    socket.on("chatMessage", msg => store.dispatch(slider(msg)));
  }
};
