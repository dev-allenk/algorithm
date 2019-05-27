function solution(s) {
  const input = s.toString().split(' ').sort((a, b) => a - b);
  const max = input.pop();
  const min = input.shift();
  return `${min} ${max}`
}