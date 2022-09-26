/*
 * In number theory, a perfect number is a positive integer that is equal to the sum of
 * its positive divisors(factors), excluding the number itself.
 * For example: 6 ==> divisors[1, 2, 3, 6]
 *      Excluding 6, the sum(divisors) is 1 + 2 + 3 = 6
 *      So, 6 is a Perfect Number
 */

const factorsExcludingNumber = (n) => {
  return [...Array(n).keys()].filter((num) => n % num === 0);
};

const perfectNumber = (n) => {
  const factorSum = factorsExcludingNumber(n).reduce((num, initialValue) => {
    return num + initialValue;
  }, 0);

  return factorSum === n;
};

let result = perfectNumber(6);
console.log(result); // true
