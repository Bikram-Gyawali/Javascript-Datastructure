const upperCaseConversion = (inputString) => {
    // Take a string and split it into characters.
    const newString = inputString.split('').map(char => {
      // Get a character code by the use charCodeAt method.
      const presentCharCode = char.charCodeAt()
      // If the character code lies between 97 to 122, it means they are in the lowercase so convert it.
      if (presentCharCode >= 97 && presentCharCode <= 122) {
        // Convert the case by use of the above explanation.
        return String.fromCharCode(presentCharCode - 32)
      }
      // Else return the characters without any modification.
      return char
    })
    // After modification, with the help of the join method, join all the characters and return them.
    return newString.join('')
  }