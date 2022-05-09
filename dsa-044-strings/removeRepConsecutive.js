const removeDupConsecutive = (str) => {
  if (typeof str !== "string") {
    throw new Error("Enter valid string");
  }
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      res.push(str[i]);
    }
  }
  return res;
};

console.log(removeDupConsecutive("ABAAABBBBAACCCAZAA")); // A B A B A C A Z A
