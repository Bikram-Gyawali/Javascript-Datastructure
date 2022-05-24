/**
 * bubble sort is a kind of sorting algorithm of an array that compares item adjacent to it position and swap their position . the time complexity is (O^2)
 * if the array is nearly sorted then we can optimise bubble sort by adding a flag
 * it is not efficent algorithm
 *
 * some how if the array is sorted or nearly sorted then we can optimize bubble sort by adding a flag
 *
 * */

// bubble sort using 2 for loops

function bubbleSort(items) {
  const length = items.length;
  let swapFlag;

  for (let i = length; i > 0; i--) {
    swapFlag = true;
    for (let j = 0; j < i - 1; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
        swapFlag = false;
      }
    }
    if (swapFlag) {
      break;
    }
  }
  return items;
}
console.log(bubbleSort([1,3,2])) //[ 1, 2, 3]