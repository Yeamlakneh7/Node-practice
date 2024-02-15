const express = require("express");

const app = express();

app.use(express.static("./ResponsiveWeb"));

app.listen(5555, (err) => {
    if (err) console.log(err);
    console.log("Listening from localhost:5555");
});