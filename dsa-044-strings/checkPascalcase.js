const CheckPascalCase = (str) => {
  if (typeof str !== "string") {
    return new TypeError("Argument is not a working.");
  }
  const pattern = /^[A-Z][A-Za-z]*$/;
  return pattern.test(str);
};

console.log(CheckPascalCase("hellO")); //false
console.log(CheckPascalCase("HellO")); //true
console.log(CheckPascalCase("HellO_world")); //false
console.log(CheckPascalCase("HelloWorld")); //true


