// var a1 = 12;
// var b1 = 8;
function sum(a, b) {
    let c;
    c = a + b;
    console.log(c);
}
// // console.log(module);
// sum();

module.exports.sum = sum;
// console.log(module);

function diff(a, b) {
    let d;
    d = a - b;
    console.log(d);
}

module.exports.diff = diff;