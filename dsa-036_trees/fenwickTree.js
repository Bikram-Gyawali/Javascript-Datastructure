class FenwickTree {
  constructor(fenwickArray, array, n) {
    for (let i = 1; i <= n; i++) {
      fenwickArray[i] = 0;
    }
    for (let i = 0; i < n; i++) {
      this.update(fenwickArray, n, i, array[i]);
    }
  }

  update(fenwickArray, n, index, value) {
    index = index + 1;
    while (index <= n) {
      fenwickArray[index] += value;
      index += index & -index;
    }
  }

  getPrefixSum(fenwickArray, index) {
    let currSum = 0;
    index = index + 1;
    while (index > 0) {
      currSum += fenwickArray[index];
      index -= index & -index;
    }
    return currSum;
  }
}

export { FenwickTree };
