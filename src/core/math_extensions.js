export function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

export function randomNumberRange(min, max) {
    const diff = max - min;
    const addition = Math.random() * diff;
    return Math.floor(min + addition + 1);    
}