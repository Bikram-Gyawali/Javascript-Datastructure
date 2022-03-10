/*
    Binary Equivalent 
    eg
    binary of 1=1
    binary of 2=10
    binary of 3=11
    binary of 4=100
*/

const binaryEquivalent = (num) => {
  if (num === 0 || num === 1) {
    return String(num);
  }
  return binaryEquivalent(Math.floor(num / 2)) + String(num % 2);
};

console.log(binaryEquivalent(10)); // 1010
console.log(binaryEquivalent(1));  // 1
console.log(binaryEquivalent(7));  // 111

