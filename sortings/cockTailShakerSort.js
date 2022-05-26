/**
 * Cocktail shaker sort is an algorithm is abidirectional bubble sort algorithm
 *
 * the algorithm extends bubble sort by operating in two directions. It improves on bubble sort by more quickly moving items to the beggining of the list , it provides only marginal performance improvements.
 *
 * */

const cockTailShakeSort = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    let j;

    // Backwards
    for (j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        [items[j], items[j - 1]] = [items[j - 1], items[j]];
      }
    }

    // Forwards
    for (j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
      }
    }
  }
  return items;
};

console.log(cockTailShakeSort([1, 5, 3, 4]));
