const express = require("express");

const app = express();

app.use(express.static("ResponsiveWeb"));

const PORT = 3033;

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Listening from localhost:3033");
});