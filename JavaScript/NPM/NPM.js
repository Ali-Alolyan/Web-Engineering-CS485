


// Node Package Manger (NPM) or (npm) https://www.npmjs.com
    // Some Packages (bitwise{Project Package}, jest{Developer Package}, Filesystem{Included Package})
    // * to start use NPM use (npm init -y) in terminal
    // * to install Project Package (npm i packageName) or (npm install packageName)
    // * to install Developer Package (npm i -D packageName) or (npm install -D packageName) or (npm i --save-dev packageName)
    // * to delet Package (npm uninstall packageName)
    // * to test use npm test Example in src.test.js file

const bitwise = require('bitwise');

// bitwise package
let resultAnd = bitwise.bits.and([0,1,0,1], [1,0,1,0]);
let resultOr = bitwise.bits.or([0,1,0,1], [1,0,1,0]);
console.log(resultAnd)
console.log(resultOr)

// jest package go to ./src.test.js

// Filesystem package
const fs = require('fs');

fs.renameSync('./text-file.txt', './text.txt');

let resultFsSync = fs.readFileSync('./text.txt', 'utf-8')
let resultFs = fs.readFile('./text.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log(Error);
    }else{
        console.log(data);
    }
})
console.log(resultFs) // first will print undefined
console.log(resultFsSync)

fs.unlinkSync('./new-text.txt')
fs.writeFileSync('./new-text.txt', 'HHHHHHHH');
fs.renameSync('./text.txt', './text-file.txt');