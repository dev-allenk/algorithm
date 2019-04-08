function solution(n) {
    const eratosNum = [2, 3, 5, 7]
    const arr = [];
    for (let i = 0; i + 1 < Math.sqrt(n); i++) {
        arr[i] = i + 2;
    }
    for (let j = 0; j < eratosNum.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % eratosNum[j] === 0 && arr[i] !== eratosNum[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr.reduce((x, y) => x + y);
}
let d = new Date().getTime();
console.log(solution(10000000));
console.log(new Date().getTime() - d);