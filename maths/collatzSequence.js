//  * The Collatz Sequence states that every natural number will always fall in a 1, 2, 4 loop when iterated under the following function:If the number is even, divide by 2, and if its odd, multiply it by 3 and add 1.

export function collatz(n) {
  const steps = [];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }

    steps.push(n);
  }

  return { result: n, steps: steps };
}
