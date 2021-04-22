var array1 = [10, 23, 1, 45, 19, 16, 00, 100];
function getKthSmallestValue(array, k) {
  var minH = new MinHeap();
  for (var i = 0; i < array1.length; i++) {
    minH.add(array[i]);
  }
  for (var i = 1; i < k; i++) {
    minH.poll();
  }
  return minH.poll();
}

console.log(getKthSmallestValue(array1, 2));
console.log(getKthSmallestValue(array1, 3));
console.log(getKthSmallestValue(array1, 5));
