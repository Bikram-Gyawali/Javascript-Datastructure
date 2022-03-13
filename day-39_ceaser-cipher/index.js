function ceaserCipher(str, num) {
  if (!num) throw new Error("Missing argumenets");

  const lowerCaseString = str.toLowerCase();
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const totalAlphabets = alphabets.length;
  const alphabetsMap = new Map();
  for (const index in alphabets) {
    alphabetsMap[alphabets[index]] = index;
  }

  for (const index in alphabets) {
    alphabetsMap[alphabets[index]] = index;
  }

  for (let index in lowerCaseString) {
    const currentChar = lowerCaseString[index];
    if (currentChar === " ") {
      result += currentChar;
      continue;
    }

    const currIndex = Number(alphabetsMap[currentChar]);
    let newIndex = currIndex + num;
    if (newIndex > totalAlphabets - 1) {
      newIndex -= totalAlphabets;
    }
    if (newIndex < 0) {
      newIndex = newIndex + totalAlphabets;
    }
    if (str[index] === str[index].toUpperCase()) {
      result += alphabets[newIndex].toUpperCase();
    } else {
      result += alphabets[newIndex];
    }
  }
  return result;
}
