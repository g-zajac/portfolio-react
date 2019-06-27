const express = require("express");
const db = require("./utils/db");
const app = express();
// module.exports = {
//     sendTemperature
// };
console.log(process.env.NODE_PATH);
var mqtt = require("./utils/mqtt");

const port = 5000;

const server = require("http").Server(app);

const io = require("socket.io")(server, {
    origins: "localhost:3000"
});

app.get("/get-smt-chart-data", (req, res) => {
    db.getSmtCharData()
        .then(results => {
            console.log("db results: ", results.rows);
            res.json(results.rows);
        })
        .catch(err => console.log(err));
});

server.listen(port, () => console.log(`Server started on port ${port}`));

io.on("connection", function(socket) {
    console.log(`Socket with id ${socket.id} just connected`);

    socket.on("disconnect", function() {
        console.log(`Socket with id ${socket.id} disconnected`);
    });

    socket.on("toggleSwitch", msg => {
        let toggle;
        if (msg == true) {
            toggle = "1";
        } else toggle = "0";
        console.log("socket io toggle received: ", toggle);
        mqtt.sendToggle(toggle);
    });

    socket.on("toggleBulb", msg => {
        let toggle;
        if (msg == true) {
            toggle = "1";
        } else toggle = "0";
        console.log("socket io bulb received: ", toggle);
        mqtt.sendBulb(toggle);
    });

    socket.on("sliderValue", msg => {
        console.log("socket io slider received: ", msg);
        mqtt.sendValue(msg.toString());
    });
});

exports.sendTemperature = function(temp) {
    io.sockets.emit("temperature", temp);
};

exports.sendHumidity = function(hum) {
    io.sockets.emit("humidity", hum);
};

exports.sendCO2 = function(co2) {
    io.sockets.emit("co2", co2);
};
