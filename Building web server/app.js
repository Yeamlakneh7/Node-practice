// let os = require('os');
// // console.log(os);

// // let platform = os.platform();
// // console.log(platform);

// let freemem = os.freemem();
// // console.log(freemem);
// console.log(freemem/(1024*1024*1024));

// let totalmem = os.totalmem();
// console.log(totalmem/(1024*1024*1024));

// let some = os.arch()
// // console.log(some);

// const path = require('path');
// let pathObj = path.parse(__filename)
// // console.log(pathObj);

// // console.log(__filename);
// // console.log(__dirname)

//code to use display the responsiveWeb page using express.

const express = require("express");

const app = express();

const PORT = 3033;

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Listening from localhost:3033");
});

app.use(express.static("ResponsiveWeb"));
