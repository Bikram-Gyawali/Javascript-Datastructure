// reverse a string using recursion
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1)); //substring returns the value of string from 0 / initial parameter index to one index less than the given 2nd parameter
}
