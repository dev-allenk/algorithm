// var input = require('fs').readFileSync('/dev/stdin');
// var answer = -1;
// var five = parseInt(input / 5),
//     f_remain = input % 5;
// for (var n = 0; n <= five; n++) {
//     var three = parseInt((f_remain + (5 * n)) / 3)
//     var t_remain = (f_remain + (5 * n)) % 3
//     if (t_remain === 0) {
//         answer = five - n + three;
//         console.log(answer);
//         break;
//     }
// }
// if (answer === -1) { console.log(answer) }

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let answer = -1;
rl.on("line", function (line) {
    //일단 수를 5로 나눈다
    let five = parseInt(line / 5)  //수를 5로 나눈 몫 = 5kg짜리 봉투 갯수
    let f_remain = line % 5 //수를 5로 나눈 나머지
    //나머지 + 5 * n 이 3의 배수여야함. 배수라면, five에서 n만큼 빼고, three와 더하면 최소 갯수..겠지?
    for (let n = 0; n <= five; n++) {
        let three = parseInt((f_remain + (5 * n)) / 3) //나머지를 3으로 나눈 몫 = 3kg짜리 봉투 갯수
        let t_remain = (f_remain + (5 * n)) % 3 //나머지를 3으로 나눈 나머지
        if (t_remain === 0) {
            answer = five - n + three;
            console.log(answer);
            break;
        }
    }
}).on("close", function () {
    console.log(answer)
    process.exit();
});