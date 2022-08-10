export const binaryExponentiation = (a, n) => {
 
    if (n === 0) {
      return 1
    } else if (n % 2 === 1) {
      return binaryExponentiation(a, n - 1) * a
    } else {
      const b = binaryExponentiation(a, n / 2)
      return b * b
    }
  }