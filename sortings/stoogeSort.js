export function stoogeSort(items, leftEnd, rightEnd) {
  if (items[rightEnd - 1] < items[leftEnd]) {
    const temp = items[leftEnd];
    items[leftEnd] = items[rightEnd - 1];
    items[rightEnd - 1] = temp;
  }
  const length = rightEnd - leftEnd;
  if (length > 2) {
    const third = Math.floor(length / 3);
    stoogeSort(items, leftEnd, rightEnd - third);
    stoogeSort(items, leftEnd + third, rightEnd);
    stoogeSort(items, leftEnd, rightEnd - third);
  }
  return items;
}
