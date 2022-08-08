const BinaryConvert = (num) => {
  let power = 1;
  let binary = 0;

  while (num) {
    const rem = num % 2;
    num = Math.floor(num / 2);
    binary = rem * power + binary;
    power *= 10;
  }

  return binary;
};

export { BinaryConvert };
