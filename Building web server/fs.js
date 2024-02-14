// console.log('Hello')

let events = require('events');
let eventEmmiter = new events.EventEmitter();

let myEvent = function () {
    console.log("Yes, I am here!");
}

eventEmmiter.on("John", myEvent);

eventEmmiter.emit("John");