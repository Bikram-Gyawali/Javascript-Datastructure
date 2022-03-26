const titleCaseConversion = (input) => {
  if (input === "") return "";

  const stringCollections = input.split(" ").map((word) => {
    let firstChar = "";
    const firstCharCode = word[0].charCodeAt();
    if (firstCharCode >= 97 && firstCharCode <= 122) {
      firstChar += String.fromCharCode(firstCharCode - 32);
    } else {
      firstChar += word[0];
    }
    const newWordChar = word
      .slice(1)
      .split("")
      .map((char) => {
        // Get the ASCII character code by the use charCodeAt method.
        const presentCharCode = char.charCodeAt();
        // If the ASCII character code lies between 65 to 90, it means they are in the uppercase so convert it.
        if (presentCharCode >= 65 && presentCharCode <= 90) {
          // Convert the case by use of the above explanation.
          return String.fromCharCode(presentCharCode + 32);
        }
        // Else return the characters without any modification.
        return char;
      });
    return firstChar + newWordChar.join("");
  });
  return stringCollections.join(" ");
};
