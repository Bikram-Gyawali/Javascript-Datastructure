/**
 * the function alphanumericPalindrome receives a string with a varying formats like racecar RaceCar and race CAR
 *
 * the point is we have to check only if the alphanumeric characters are palindrome or not we remove the spaces symbols punctuations etc and the case of the characters doesn't matter
 *
 */

const alphanumericPalindromeCheck = (val) => {
  // remove the special characters in the string and convert to lowercase characters
  const newStr = val.replace(/[^a-zA-Z0-9]*/g, '').toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log("result 1",alphanumericPalindromeCheck("racecar"));
console.log("result 2",alphanumericPalindromeCheck("raCecar"));
console.log("result 3",alphanumericPalindromeCheck("mom"));
console.log("result 4",alphanumericPalindromeCheck("bikram"))


