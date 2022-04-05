const checkFlatCase = (str) => {
    // firstly, check that input is a string or not.
    if (typeof str !== 'string') {
      return new TypeError('Argument is not a string.')
    }
  
    const check = /^[a-z]*$/
    return check.test(str)
  }