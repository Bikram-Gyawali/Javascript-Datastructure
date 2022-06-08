const quickSort = (arr) => {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  const PIVOT = arr[0];
  const GREATER = [];
  const LESSER = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] > PIVOT) {
      GREATER.push(arr[i]);
    } else {
      LESSER.push(arr[i]);
    }
  }

  return [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)];
};

console.log(quickSort([1, 4, 6, 11, 13, 10, 5, 4, 2, 0, -5]));

// [-5, 0, 1,  2,  4, 4, 5, 6, 10, 11,13 ]
