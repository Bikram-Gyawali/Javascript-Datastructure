function squareRoot(num) {
  if (num == 0 || num == 1) {
    return num;
  }
  var index = 1;
  var square = 1;

  while (square < num) {
    if (square == num) {
      return square;
    }
    index++;
    square = index * index;
  }
  return index;
}
console.log(squareRoot(16));
