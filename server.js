const express = require("express");
const app = express();
const port = 5000;

app.get("/test", (req, res) => {
    const test = [{ id: 1, name: "jas" }, { id: 2, name: "fasola" }];
    res.json(test);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
