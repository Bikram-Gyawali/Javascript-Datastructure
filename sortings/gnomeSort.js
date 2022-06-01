/**
 * gnome sort is a sortnig algorithm that moving an elment to its proper place is accomplished by a series of swap ...
 * */

const gnomeSort = (items) => {
  if (items.length <= 1) {
    return;
  }

  let i = 1;

  while (i < items.length) {
    if (items[i - 1] <= items[i]) {
      i++;
    } else {
      [items[i], items[i - 1]] = [items[i - 1], items[i]];

      i = Math.max(1, i - 1);
    }
  }

  return items;
};

console.log(gnomeSort([1, 5, 10, 6, 2, 0, 10]));
