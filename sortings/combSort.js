/**
 * Comb sort is a improvement in bubble sort algo..
 *
 * the basic idea is to eliminate the turtles or small values near the end of the lis, since in a bubble sort these slow the sortinig processdown. Rabbits i.e the large values around the beginning of the list do not pose a problem in a bubble sort .
 *
 * In bubble sort, when any two elements are compared , thy always have a gap of 1 .Same way the concept of combSort is the gap can be more than 1 . The inner loop of bubble sort which does the actualswap is modified such that gap btwn swapped elements goes down (for each iteratiton of outer loop ) in steps of "shrink factor"
 * k:[n/k, n/k2 , ..... 1].
 *
 * */

const combSort = (list) => {
  if (list.length === 0) {
    return list;
  }
  const shrink = 1.3;
  let gap = list.length;
  let isSwapped = true;
  let i = 0;

  while (gap > 1 || isSwapped) {
    gap = parseInt(parseFloat(gap) / shrink, 10);

    isSwapped = false;
    i = 0;
    while (gap + i < list.length) {
      if (list[i] > list[i + gap]) {
        [list[i], list[i + gap]] = [list[i + gap], list[i]];
        isSwapped = true;
      }
      i += 1;
    }
  }
  return list;
};

console.log(combSort([1, 5, 2, 9, 1, 6])); // [1,1,2,5,6,9]
