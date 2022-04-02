const AlternativeStringArrange = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Not String(S)";
  }

  let outStr = "";

  const firstStringLength = str1.length;
  const secondStringLength = str2.length;

  const absLength =
    firstStringLength > secondStringLength
      ? firstStringLength
      : secondStringLength;

  for (let i = 0; i < absLength; i++) {
    if (i < firstStringLength) {
      outStr += str1[i];
    }

    if (i < secondStringLength) {
      outStr += str2[i];
    }
  }
  return outStr;
};
console.log(AlternativeStringArrange("bikram", "markib"));
// output :: bmiakrrkaimb