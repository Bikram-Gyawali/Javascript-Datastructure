/**
 * Pattern matching is a case insensitive as the inputs are converted to lower case before the code is executed
 * The code will run throught the entire text and return the starting index if the given pattern is available in the text
 * */

const checkPattern = (text, pattern) => {
  if (typeof text !== "string" || typeof pattern !== "string") {
    throw new TypeError("Given input is not a strinig");
  }

  const textLength = text.length;
  const patternLength = pattern.length;

  for (let i = 0; i <= textLength - patternLength; i++) {
    for (let j = 0; j < textLength; j++) {
      if (text[i + j] !== pattern[j]) break;

      if (j + 1 === patternLength) {
        return "Given pattern is found at index " + i;
      }
    }
  }
};

console.log("=>" + checkPattern("bikram", "ram"));
