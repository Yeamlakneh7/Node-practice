// console.log("Hello.")
// first();

//using functions under bracket to resolve the problem of namespace collisions.

(a = () => {
    console.log("Developer A");
})
a();
(a = () => {
    console.log("Developer B");
})

a();

// var obj1 = {
// num1() {
//     console.log("Ten");
// }
// };


// var obj1 = {
//  num1() {
//     console.log("Twenty");
// }
// };
// obj1.num1();
// obj1.num1();
// one line added.