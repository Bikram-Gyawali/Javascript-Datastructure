const values = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const orders = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

function decimalToRoman(num) {
  let roman = "";
  for (const sym of orders) {
    while (num >= values[sym]) {
      roman += sym;
      num -= values[sym];
    }
  }
  return roman;
}
