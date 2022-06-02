/**
 * mergesort is an algo where the main list is divided down into two half sized list which then have merge sort called on these two smaller lists recursively until there is only sorted list of one .
 * On the way up the recursive calls the list will be mrged together inserting the smaller value first , creating a larget sorted list.
 * */

function merge(list1, list2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list[i] < list2[j]) {
      results.push(list1[i++]);
    } else {
      results.push(list2[j++]);
    }
  }

  return results.concat(list1.slice(i), list2.slice(j));
}

function mergeSort(list) {
  if (list.length < 2) return list;

  const listHalf = Math.floor(list.length / 2);
  const subList1 = list.slice(0, listHalf);
  const subList2 = list.slice(listHalf, list.length);

  return merge(mergeSort(subList1), mergeSort(subList2));
}
