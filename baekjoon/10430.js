// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(function(x) {return parseInt(x)});
// var a = input[0],
//     b = input[1],
//     c = input[2];
// console.log((a + b) % c);
// console.log((a % c + b % c) % c);
// console.log((a * b) % c);
// console.log((a % c * b % c) % c);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(x => parseInt(x));
}).on("close", function () {
  let a = input[0],
    b = input[1],
    c = input[2];
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log((((a % c) * b) % c) % c);
  process.exit();
});
