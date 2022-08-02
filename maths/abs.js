

 const abs = (num) => {
    const validNumber = +num 
    if (Number.isNaN(validNumber)) {
      throw new TypeError('Argument is NaN - Not a Number')
    }
  
    return validNumber < 0 ? -validNumber : validNumber // if number is less then zero mean negative then it converted to positive. i.e -> n = -2 = -(-2) = 2
  }
  
  export { abs }
  