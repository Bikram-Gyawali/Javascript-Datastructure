function euclideanGcd(first, second) {
  /*
        calaculate gcd of two numbers using euclideean rcursive algorithm
    */
  if (second === 0) {
    return false;
  } else {
    return euclideanGcd(second, first % second);
  }
}
console.log(euclideanGcd(0,9));
function euclideanGcdIterative(first, second) {
  // calculate gcd of 2 numbers using eucledean iterative algorithm
  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  return first;
}

// export { euclideanGcd, euclideanGcdIterative };
