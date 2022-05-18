const upper = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Argument should be string");
  }

  return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(char.charCodeAt() - 32)
  );
};
