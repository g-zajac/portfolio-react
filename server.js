const express = require("express");
const app = express();
console.log(process.env.NODE_PATH);
var mqtt = require("./utils/mqtt");

const port = 5000;

const server = require("http").Server(app);

const io = require("socket.io")(server, {
    origins: "localhost:3000"
});

app.get("/test", (req, res) => {
    const test = [{ id: 1, name: "John" }, { id: 2, name: "Frank" }];
    res.json(test);
});

server.listen(port, () => console.log(`Server started on port ${port}`));

io.on("connection", function(socket) {
    console.log(`Socket with id ${socket.id} just connected`);

    socket.on("disconnect", function() {
        console.log(`Socket with id ${socket.id} disconnected`);
    });

    socket.on("toggleSwitch", msg => {
        console.log("socket io toggle received: ", msg);
        mqtt.sendToggle(msg.toString());
    });
    socket.on("sliderValue", msg => {
        console.log("socket io slider received: ", msg);
        mqtt.sendValue(msg.toString());
    });
});
