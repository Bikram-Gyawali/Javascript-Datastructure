function integralEvaluation(N, a, b, func) {
  // Check if N is an even integer
  let isNEven = true;
  if (N % 2 !== 0) isNEven = false;

  if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("Expected integer N and finite a, b");
  }
  if (!isNEven) {
    throw Error("N is not an even number");
  }
  if (N <= 0) {
    throw Error("N has to be >= 2");
  }

  // Check if a < b
  if (a > b) {
    throw Error("a must be less or equal than b");
  }
  if (a === b) return 0;

  // Calculate the step h
  const h = (b - a) / N;

  // Find interpolation points
  let xi = a; // initialize xi = x0
  const pointsArray = [];

  // Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp;
  for (let i = 0; i < N + 1; i++) {
    if (i === 0 || i === N) temp = func(xi);
    else if (i % 2 === 0) temp = 2 * func(xi);
    else temp = 4 * func(xi);

    pointsArray.push(temp);
    xi += h;
  }

  // Calculate the integral
  let result = h / 3;
  temp = 0;
  for (let i = 0; i < pointsArray.length; i++) temp += pointsArray[i];

  result *= temp;

  if (Number.isNaN(result)) {
    throw Error(
      "Result is NaN. The input interval doesn't belong to the functions domain"
    );
  }

  return result;
}

export { integralEvaluation };
