function insertionSort(items) {
  var len = items.length;
  var value, i, j;
  for (i = 0; i < len; i++) {
    value = items[i];
    console.log(i - 1);
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      console.log("j", j);
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}
console.log(insertionSort([1, 4, 6, 2, 10, 44, 12, 9]));
