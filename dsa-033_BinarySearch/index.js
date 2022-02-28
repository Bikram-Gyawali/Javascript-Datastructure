// In binary search operation we have a sorted array where we find the index of the item we want to search

/*
steps:-
=>declare left and right boundary
=>repeatedly break the array into two into subarray we use math.floor/2
=>return the index of the elem if found othrwise return -1
*/

const binarySearch = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];
    if (guess === item) return mid;
    if (guess > item) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

binarySearch([4, 5, 6, 7, 8, 9], 1); //-1
binarySearch([4, 5, 6, 7, 8, 9, 10], 10); // 6
