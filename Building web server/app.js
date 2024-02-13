let os = require('os');
// console.log(os);

// let platform = os.platform();
// console.log(platform);

let freemem = os.freemem();
// console.log(freemem);

let totalmem = os.totalmem();
console.log(totalmem);

let some = os.arch()
// console.log(some);

const path = require('path');
let pathObj = path.parse(__filename)
// console.log(pathObj);

// console.log(__filename);
// console.log(__dirname)