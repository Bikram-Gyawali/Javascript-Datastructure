const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let current = romanNumerals[str[i]];
    let next = romanNumerals[str[i + 1]];

    if (current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }
  return total;
}
