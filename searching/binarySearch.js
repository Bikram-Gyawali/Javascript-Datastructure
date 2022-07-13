function binarySearchIterative(arr, x, low = 0, high = arr.length - 1) {
  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
