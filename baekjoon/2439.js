const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let blank = [];
let star = [];

rl.on("line", function (line) {
    addBlank(line);
    addStar(line);
    star.reverse();
    for (let i = 0; i < blank.length; i++) {
        console.log(blank[i] + star[i])
    }
}).on("close", function () {
    process.exit();
});

function addBlank(n) {
    let temp = '';
    if (n === 0) { return; }
    for (let i = 0; i < n - 1; i++) {
        temp += ' ';
    }
    blank.push(temp);
    return addBlank(n - 1)
}
function addStar(n) {
    let temp = '*';
    if (n === 0) { return; }
    for (let i = 0; i < n - 1; i++) {
        temp += '*';
    }
    star.push(temp);
    return addStar(n - 1)
}