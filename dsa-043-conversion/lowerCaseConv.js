const LowerCaseConversion = (inputString) => {
  // Take a string and split it into characters.
  const newString = inputString.split("").map((char) => {
    // Get a character code by the use charCodeAt method.
    const presentCharCode = char.charCodeAt();
    // If the character code lies between 65 to 90 it means they are in the upper case so convert it.
    if (presentCharCode >= 65 && presentCharCode <= 90) {
      // Convert the case by use of the above explanation.
      return String.fromCharCode(presentCharCode + 32);
    }
    // Else return the characters without any modification.
    return char;
  });
  // After modification, with the help of the join method, join all the characters and return them.
  return newString.join("");
};
