function lucas (index) {
    // index can't be negative
    if (index < 0) throw new TypeError('Index cannot be Negative')
  
    // index can't be a decimal
    if (Math.floor(index) !== index) throw new TypeError('Index cannot be a Decimal')
  
    let a = 2
    let b = 1
    for (let i = 0; i < index; i++) {
      const temp = a + b
      a = b
      b = temp
    }
    return a
  }