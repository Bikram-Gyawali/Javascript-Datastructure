const CheckWordCount = (str, isCaseSensitive = false) => {
    if (typeof str !== 'string') {
      throw new TypeError('The first param should be a string')
    }
    if (typeof isCaseSensitive !== 'boolean') {
      throw new TypeError('The second param should be a boolean')
    }
    const newStr = isCaseSensitive ? str.toLowerCase() : str
    return newStr
      .split(/\s+/) // remove all spaces and distribute all word in List
      .reduce(
        (occurrence, word) => {
          occurrence[word] = occurrence[word] + 1 || 1
          return occurrence
        },
        {}
      )
  }

  console.log(CheckWordCount("Hello I , I am I and I am here to check my i I "));