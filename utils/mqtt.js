var mqtt = require("mqtt");
var serverSocket = require("../server");
//TODO put it ot env
var secrets = require("../secrets.json");

// var client = mqtt.connect("mqtt://10.0.10.30");
var client = mqtt.connect(
    `mqtt://${secrets.mqtt_login}:${secrets.mqtt_password}@broker.shiftr.io`,
    { clientId: "nodejs" }
);

options = {
    clientId: "javascript",
    clean: true
};

client.on("connect", function() {
    client.subscribe("/floating/socket1/relay/0/set", function(err) {
        console.log(err);
    });
    client.subscribe("/node/sensor/dht/temperature", function(err) {
        console.log(err);
    });
    setInterval(function() {
        client.publish("/interval/ping", "test");
    }, 3000);
});

module.exports = {
    sendToggle,
    sendValue
};

client.on("message", function(topic, message) {
    // message is Buffer
    console.log(topic.toString());
    console.log(message.toString());
    if (topic == "/node/sensor/dht/temperature") {
        console.log("temperature: ", message.toString());
        serverSocket.sendTemperature(message.toString());
    }
    //TODO send feedback socket io to switch
    // client.end(); //terminating connection and script
});

function sendTestMessage() {
    client.publish("/web/test", "test");
}
function sendToggle(onOff) {
    client.publish("/floating/socket1/relay/0/set", onOff);
}
function sendValue(value) {
    client.publish("/bulb/value/", value);
}
