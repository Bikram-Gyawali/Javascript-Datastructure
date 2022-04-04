/**
 * an anagram is a string that is a word or phrase formed by rearranginig the letters of a different words or phrase  typically using all letters exactly at once. anagram check is not case sensitive
 * */

const checkAnagramRegex = (str1, str2) => {
  if (typeof (str1 || str2) != "string") {
    throw new TypeError("Both arguments must be strings.");
  }

  // to be a anagram both string must be of same length
  if (str1.length !== str2.length) {
    return false;
  }

  /**
   * str1 is converted to an aarray and iterate through each letter of str1 by reduce method which returns id empty or not
   * if it returns empty string ''-> falsy, with logical NOT operator, it will be converted to boolean and return true else false
   * */

  return ![...str1].reduce(
    (str2Acc, curr) => str2Acc.replace(new RegExp(curr, "i"), ""), //remove the similar letter
    str2
  );
};

const checkAnagramMap = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new TypeError("Both arguments should be strings.");
  }

  if (str1.length !== str2.length) {
    return false;
  }

  const str1List = Array.from(str1.toUpperCase()); //converting to uppercase

  //get occurrences of str1 characters by using Hashmap
  const str1Occurs = str1List.reduce(
    (map, char) => map.set(char, map.get(char) + 1 || 1),
    new Map()
  );

  for (const char of str2.toUpperCase()) {
    if (!str1Occurs.has(char)) {
      return false;
    }
    let getCharCount = str1Occurs.get(char);
    str1Occurs.set(char, --getCharCount);

    getCharCount === 0 && str1Occurs.delete(char);
  }

  return true;
};

console.log(checkAnagramRegex('nodejs', 'denojs')); //true
console.log(checkAnagramMap('bikram', 'markib'));   //true
console.log(checkAnagramRegex('ohbhai', 'ehbhai')); //false

