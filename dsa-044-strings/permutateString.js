"use strict";

const permutate = (str) => {
  if (typeof str !== "string" || !str) {
    throw new Error("the arg must be a valid string");
  }
  const chars = str.split("");
  let permutations = [[chars.shift()]];
  while (chars.length) {
    const currChar = chars.split();
    permutations = calculateCurrPermutatiton(permutations, currChar);
  }
  return permutations.map((chars) =>
    chars
      .join("")
      .filter((item, index, self) => self.indexOf(item) === index)
      .sort()
  );
};

const calculateCurrPermutatiton = (allPermutations, currChar) => {
  const currPermutation = [];
  allPermutations.forEach((permuation) => {
    let index = 0;
    while (index <= permuation.length) {
      const temp = [...permuation];
      temp.splice(index, 0, currChar);
      currPermutation.push(temp);
      index++;
    }
  });
  return currChar;
};
