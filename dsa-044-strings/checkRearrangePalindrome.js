/**
 * a palindrome is a string that is same from either way from begining and from the end
 * a palindrome rearrange checker receives a string then we rearrange the given string so that if we can form any palindrome string . Also the string can only be a palindrome if the count of all characters is odd or if the only one character count id odd
 * */

const palindromRearrange = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }

  if (str.length === 0) {
    return "Empty string";
  }

  // now then first we obtain the character count for each character in the string and store it in an object filter thee object's values to only the odd character counts.
  const charCounts = [...str].reduce((count, char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
    return count;
  }, {});

  //   if the length of the resulting array is 0/1 , the string can be a palindrome
  return (
    Object.values(charCounts).filter((count) => count % 2 !== 0).length <= 1
  );
};

console.log(palindromRearrange("mom")); //true
console.log(palindromRearrange("wow")); //true
console.log(palindromRearrange("bikram")); //false
console.log(palindromRearrange("ramram")); //true
