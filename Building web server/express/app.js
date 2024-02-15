const express = require("express");

const app = express();

const PORT = 5555;

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Listening from localhost:5555");
});

app.use(express.static("././ResponsiveWeb"));
