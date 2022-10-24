function isArmstrongNumber(n) {
    let strN = n + '';
    let power = strN.length;
    let sum = 0;
    for(let i = 0; i < strN.length; i++) {
        sum += Math.pow(Number(strN[i]), power);
    }
    return sum === n;

}