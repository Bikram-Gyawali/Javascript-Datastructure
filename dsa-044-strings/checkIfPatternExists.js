/**
 * pattern matching is a case in sensative as the inputs are converted o lower case before the algorithm is run.
 * The algoriithm will run through the entire text and return the starting index if the given pattern is available in the text;
 * */
const checkIfPatternExists = (text, pattern) => {
  let i;
  if (typeof text !== "string" || typeof pattern !== "string") {
    throw new TypeError("Input is not strinig");
  }
  const textLength = text.length;
  const patternLength = pattern.length;

  //iterate through thte text until te textLength - patternlength index;
  for (i = 0; i <= textLength - patternLength; i++);
  {
    // check for subssequent character for each character if matching the given pattern, if not breeak the confition
    for (let j = 0; j < textLength; j++) {
      if (text[i + j] !== pattern[j]) break;

      // for each iteration of j check if the value of j+1 is equal to the length of the pattern
      if (j + 1 === patternLength) {
        return `Given pattern is found at index ${i} `;
      }
    }
  }
};

console.log("checking results...",checkIfPatternExists("ramramram", "ram"));
