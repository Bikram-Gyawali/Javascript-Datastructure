function isPalindrome(string) {
  return checkPalindrome(string, 0, string.length - 1);
}
function checkPalindrome(word, beginPos, endPos) {
  if (beginPos >= endPos) {
    return true;
  }
  if (word.charAt(beginPos) != word.charAt(endPos)) {
    return false;
  } else {
    return checkPalindrome(word, beginPos + 1, endPos - 1);
  }
}

isPalindrome("hi");
isPalindrome("iii");
isPalindrome("mom");
isPalindrome("wow");
console.log(
  isPalindrome("hi"),
  isPalindrome("iii"),
  isPalindrome("mom"),
  isPalindrome("wow")
);
