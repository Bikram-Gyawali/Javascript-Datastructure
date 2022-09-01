export const isDivisible = (num1, num2) => {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new TypeError('Expected a valid real number')
    }
    if (num2 === 0) {
      return false
    }
    return num1 % num2 === 0
  }