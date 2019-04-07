// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach(message => console.log(message));
  process.exit();
});
