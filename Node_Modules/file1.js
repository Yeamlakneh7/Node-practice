var a = 12;
function sum() {
    var b = 8;
    console.log(a+b);
}
// console.log(module);
sum();

module.exports.sum = sum;
console.log(module);