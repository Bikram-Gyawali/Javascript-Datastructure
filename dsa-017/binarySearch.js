function binarySearch(array, n) {
  console.log(array.length);
  var lowIndex = 0;
  var highIndex = array.length;
  console.log(highIndex);
  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
