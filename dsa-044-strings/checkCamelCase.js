const checkCamelCase = (varName) => {
  if (typeof varName !== "string") {
    throw new TypeError("Argument is not a string.");
  }

  const pattern = /^[a-z][A-Za-z]*$/;
  return pattern.test(varName);
};
