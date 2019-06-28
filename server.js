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
            // results.rows.map()

            console.log("db results: ", results.rows);
            res.json(results.rows);
        })
        .catch(err => console.log(err));
});

app.get("/get-smt-visits", (req, res) => {
    db.getTotalNumberOfVisits()
        .then(results => {
            console.log("db results: ", results.rows);
            res.json(results.rows[0]);
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

//      [new Date(1996, 1, 1), 23],
//
//
// db results:  [ anonymous { summary: 2017-05-23T22:00:00.000Z, count: '12' },
// [0]   anonymous { summary: 2017-05-24T22:00:00.000Z, count: '30' },
// [0]   anonymous { summary: 2017-05-25T22:00:00.000Z, count: '42' },
// [0]   anonymous { summary: 2017-05-26T22:00:00.000Z, count: '36' },
// [0]   anonymous { summary: 2017-05-27T22:00:00.000Z, count: '30' },
// [0]   anonymous { summary: 2017-05-28T22:00:00.000Z, count: '36' },
// [0]   anonymous { summary: 2017-05-29T22:00:00.000Z, count: '52' },
// [0]   anonymous { summary: 2017-05-30T22:00:00.000Z, count: '43' },
// [0]   anonymous { summary: 2017-05-31T22:00:00.000Z, count: '49' },
// [0]   anonymous { summary: 2017-06-01T22:00:00.000Z, count: '51' } ]
