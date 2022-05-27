/**
 * It is an algorithm for sorting a collection of objects according to keys that are small integers
 *
 * It is an integer sorting algorithm
 *
 * */

 const countingSort = (arr, min, max) => {
  const res = [];
  const count = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }
  count[0] -= 1;
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = 0; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    res[count[arr[i] - min]] = arr[i];
    count[arr[i] - min]--;
  }
  return res;
};

const array = [1, 4, 2, 9, 5, 22, 2, 2, 6, 11];
console.log(countingSort(array, 0, 5));
