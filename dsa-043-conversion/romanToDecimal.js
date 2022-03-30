const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToDec(val) {
  let prev = " ";
  let sum = 0;
  let newPrev = 0;
  for (let i = val.length - 1; i >= 0; i--) {
    const c = val.charAt(i);

    if (prev !== " ") {
      newPrev = values[prev] > newPrev ? values[prev] : newPrev;
    }

    const currentNum = values[c];
    if (currentNum >= newPrev) {
      sum += currentNum;
    } else {
      sum -= currentNum;
    }
    prev = c;
  }
  return sum;
}
