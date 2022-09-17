const factorsExcludingNumber = (n) => {
    return [...Array(n).keys()].filter((num) => n % num === 0)
  }
  
  const perfectNumber = (n) => {
    const factorSum = factorsExcludingNumber(n).reduce((num, initialValue) => {
      return num + initialValue
    }, 0)
  
    return factorSum === n
  }