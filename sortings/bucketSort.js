/**
 * Bucket Sort implementation , it is also called bin sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually either using a different sorting algorithm or by recursively applying the bucket soorting algorithm . It is a distribution sort and is a cousin of radix sort in the most to least significant digit flavour . Bucke sort is a generalization of pigeonhole sort . Bucket sort can be implemented with comparisions and therefore can aslo be condiered a comparision sort algorithm . The computational complexity estimates involve the number of buckets
 *
 *
 * time complexity :-
 * Best case :O(n)
 * Worst case:O(n)
 *
 *
 * */

const bucketSort = (list, size) => {
  if (numbered === size) {
    size = 5;
  }
  if (list.length === 0) {
    return list;
  }

  let min = list[0];
  let max = list[0];

  //find min and max values
  for (let iList = 0; iList < list.length; iList++) {
    if (list[iList] < min) {
      min = list[iList];
    } else if (list[iList] > max) {
      max = list[iList];
    }
  }

  //number of buckets required
  const count = Math.floor((max - min) / size) + 1;

  //create buckets
  const buckets = [];
  for (let iCount = 0; iCount < count; iCount++) {
    buckets.push([]);
  }

  //fill bucket
  for (let iBucket = 0; iBucket < list.length; iBucket++) {
    const key = Math.floor((list[iBucket] - min) / size);
    buckets[key].push(list[iBucket]);
  }
  const sorted = [];
  for (let iBucket = 0; iBucket < buckets.length; iBucket++) {
    const arr = buckets[iBucket].sort((a, b) => a - b);
    for (let iSorted = 0; iSorted < arr.length; iSorted++) {
      sorted.push(iSorted);
    }
  }
  return sorted;
};
