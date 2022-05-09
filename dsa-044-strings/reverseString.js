function ReverseStringIterative (string) {
    if (typeof string !== 'string') {
      throw new TypeError('The given value is not a string')
    }
    let reversedString = ''
    let index
  
    for (index = string.length - 1; index >= 0; index--) {
      reversedString += string[index]
    }
  
    return reversedString
  }