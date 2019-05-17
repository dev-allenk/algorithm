function getGcb(small, big) {
    return big % small ? getGcb(big % small, small) : small;
 }
 function solution(n, m) {
     const [n1, n2] = [n, m].sort((a, b) => a - b);
     let gcb = getGcb(n1, n2);
     let lcm = n1 * n2 / gcb;
     return [gcb, lcm];
 }