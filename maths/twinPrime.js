const PrimeCheck = (n) => {
  // input: n: int
  // output: boolean
  if (n === 1) return false;
  if (n === 0) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

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
