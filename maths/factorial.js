const calcRange = (num) => {
    return [...Array(num).keys()].map(i => i + 1)
  }
  
  const calcFactorial = (num) => {
    if (num === 0) {
      return 'The factorial of 0 is 1.'
    }
    if (num < 0) {
      return 'Sorry, factorial does not exist for negative numbers.'
    }
    if (!num) {
      return 'Sorry, factorial does not exist for null or undefined numbers.'
    }
    if (num > 0) {
      const range = calcRange(num)
      const factorial = range.reduce((a, c) => a * c, 1)
      return `The factorial of ${num} is ${factorial}`
    }
  }
  
  export { calcFactorial }
  