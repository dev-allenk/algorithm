function solution(arr) {
    const minNum = Array.from(arr).sort((a, b) => a - b).shift();
    arr.splice(arr.findIndex(el => el === minNum), 1)
    return arr.length > 0 ? arr : [-1];
}