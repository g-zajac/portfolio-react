const express = require("express");
const app = express();
const port = 5000;

const server = require("http").Server(app);

const io = require("socket.io")(server, {
    origins: "http://127.0.0.1:5000"
});

app.get("/test", (req, res) => {
    const test = [{ id: 1, name: "John" }, { id: 2, name: "Frank" }];
    res.json(test);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

io.on("connection", function(socket) {
    console.log(`Socket with id ${socket.id} just connected`);

    socket.on("disconnect", function() {
        console.log(`Socket with id ${socket.id} disconnected`);
    });
});
