function merge(leftA, rightA) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while (leftIndex < leftA.length && rightIndex < rightIndex.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      result.push(leftA[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  var leftRemains = leftA.slice(leftIndex);
  var rightRemains = leftA.slice(rightIndex);

  return result.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  var midpoint = Math.floor(array.length / 2);
  var leftArray = array.slice(0, midpoint);
  var rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
console.log(mergeSort([6, 1, 23, 10, 12, 14, 18]));
