

function twinPrime(n) {
  const prime = PrimeCheck(n); // function call

  if (!prime) {
    return -1;
  }

  if (!PrimeCheck(n + 2)) {
    return -1;
  }

  return n + 2;
}

export { twinPrime };
