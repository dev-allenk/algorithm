function solution(x) {
    let a = x.toString().split('').map(x => Number(x)).reduce((acc, curr) => acc + curr);
    return !(x % a)
}