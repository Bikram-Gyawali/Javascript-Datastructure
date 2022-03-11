const binarySearch = (arr, searchVal, low = 0, high = arr.length - 1) => {
  if (high < low || arr.length === 0) return -1;
  const mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === searchVal) {
    return mid;
  }

  if (arr[mid] > searchVal) {
    return binarySearch(arr, searchValue, low, mid - 1);
  }

  return binarySearch(arr, searchVal, mid + 1, high);
};
