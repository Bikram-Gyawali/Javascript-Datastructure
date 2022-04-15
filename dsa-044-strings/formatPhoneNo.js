const formatPhoneNo = (number) => {
  const numString = number.toString();
  if (numString.length !== 10 || isNaN(numString)) {
    throw new TypeError("Invalid Phone Number");
  }
  const arr = "(XXX) XXX-XXXX".split("");
  Array.from(numString).forEach((n) => {
    arr[arr.indexOf("X")] = n;
  });
  return arr.join("");
};
