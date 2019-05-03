const s = 'pPoooyY';

function solution(s){
    s = s.toLowerCase();
    return s.split('').filter(el => el === 'p').length === s.split('').filter(el => el === 'y').length;
}

solution(s);