function solution(n, lost, reserve) {
    lost.forEach((el, idx) => {
        if(reserve.includes(el)) {
            lost[idx] = null;
            reserve.splice(reserve.findIndex(v => v === el), 1);
        }
    })
    lost.forEach((el, idx) => {
        if(reserve.includes(el - 1)) {
            lost[idx] = null;
            reserve.splice(reserve.findIndex(v => v === el - 1), 1);
        } else if (reserve.includes(el + 1)) {
            lost[idx] = null;
            reserve.splice(reserve.findIndex(v => v === el + 1), 1);
        }
    })
    return n - lost.filter(Boolean).length;
}