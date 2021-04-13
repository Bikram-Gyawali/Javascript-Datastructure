function swap(arr, ind1, ind2) {
  var temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 4, 6, 1, 5, 9, 3, 0]));
