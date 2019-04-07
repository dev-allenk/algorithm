// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('').sort().reverse().join('')
// console.log(parseInt(input));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
    input = line.split('').sort().reverse().join('')
}).on("close", function () {
    console.log(input)
    process.exit();
});
