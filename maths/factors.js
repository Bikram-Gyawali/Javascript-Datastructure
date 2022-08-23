const factorsOfANumber = (number = 0) => {
  return Array.from(Array(number + 1).keys()).filter(
    (num) => number % num === 0
  );
};

export { factorsOfANumber };
