function solution(phone_number) {
    const lastFour = phone_number.slice(-4);
    const rest = phone_number.slice(0, -4).replace(/[0-9]/g, '*');
    return rest + lastFour;
}