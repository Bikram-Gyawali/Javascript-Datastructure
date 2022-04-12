const countVowels = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input should be a string");
  }

  const vowelRegex = /[aeiou]/gi;
  const vowelsArray = str.match(vowelRegex) || [];

  return vowelsArray.length;
};

console.log(countVowels("bikram")); //2