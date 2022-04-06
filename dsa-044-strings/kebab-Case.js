/**
 * In contrast to camel case, kebab case separates compound words in a variable name with a dash. The dash between words can be likened to the skewer of a shish kebab, thus the name. Like snake case, which uses an underscore to separate words, kebab case maximizes whitespace in an effort to make variables easier to read
 *
 * example kebab-Case.js filename of this current file , bik-ram, res-a,
 * */

const checkKebabCase = (str) => {
  if (typeof str !== "string") {
    return new TypeError("Argument is not a string");
  }

  const pattern = /(\w+)-(\w)([\w-]*)/;
  return pattern.test(str) && !str.includes("_");
};

console.log(checkKebabCase("bik-ram")) // returns true
console.log(checkKebabCase("bikram"))  //false
console.log(checkKebabCase("bik_ram"))  //false
console.log(checkKebabCase("-b-i-k-r-a-m-"))  //false