function linearSearch(array, n) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5], 2));
console.log(linearSearch([3, 5, 7, 8, 0], 9));
