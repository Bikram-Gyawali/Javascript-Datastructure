function swap(arr, ind1, ind2) {
  var temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

function selectionSort(array) {
  var len = array.length;
  var min;
  for (var i = 0; i < len; i++) {
    min = i;
    for (j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(array, i, min);
    }
  }
  return array;
}
console.log(selectionSort([1, 4, 6, 0, 2, 9, 7, 8]));
