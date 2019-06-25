var mqtt = require("mqtt");

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
    client.subscribe("presence", function(err) {
        if (!err) {
            client.publish("presence", "Hello mqtt");
        }
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
    // client.end(); //terminating connection and script
});

function sendTestMessage() {
    client.publish("/web/test", "test");
}
function sendToggle(onOff) {
    client.publish("/bulb/toggle/", onOff);
}
function sendValue(value) {
    client.publish("/bulb/value/", value);
}