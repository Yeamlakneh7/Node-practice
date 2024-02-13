let fs = require('fs');
// console.log(fs);

let read = fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

// let readDir = fs.readdir('', 'utf-8', (err, data) = {
//     if (err) {
//         console.error(err);
//         return;
//     }
// })

let writeFile = fs.writeFile('message.txt', 'utf-8', (err) = {
    if(err) {
        console.error(err);
    } 
    
})