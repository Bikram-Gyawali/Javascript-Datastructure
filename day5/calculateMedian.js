function medianOfArray(array) {
  var length = array.length;
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

function medianOfSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1;
  }
  if (pos == 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  var median1 = medianOfArray(arr1);
  var median2 = medianOfArray(arr2);

  if (median1 == median2) {
    return median1;
  }
  var evenOffset = pos % 2 == 0 ? 1 : 0,
    offSetMinus = Math.floor(pos / 2) - evenOffset,
    offSetPlus = Math.floor(pos / 2) + evenOffset;

  if (median1 < median2) {
    return medianOfSortedArray(
      arr1.slice(offSetMinus),
      arr2.slice(offSetMinus),
      offSetPlus
    );
  } else {
    return medianOfSortedArray(
      arr2.slice(offSetMinus),
      arr1.slice(offSetMinus),
      offSetPlus
    );
  }
}

medianOfSortedArray([1, 2, 3, 4], [4, 5, 6], 3); //3.5
medianOfSortedArray([11, 23, 24], [32, 33, 450], 3); //28
