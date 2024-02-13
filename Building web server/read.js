let fs = require('fs');
// console.log(fs);

let read = fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

// let readir = fs.readdir('', 'utf-8', (err, data) = {
//     if (err) {
//         console.error(err);
//         return;
//     }
// })

let { readdir, readFile, mkdir, writeFile } = require('fs');

readdir('./', (err, files) => {
    if(err) {
        console.log('error: ', err);
    }
    else {
        console.log(files);
    }
})

writeFile('fs.js', "console.log('Hello')", (err) => {
    if (err) {
        console.log("error: ", err)
    }
    else {
        console.log('New file created');
    }
})

readFile('fs.js', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})