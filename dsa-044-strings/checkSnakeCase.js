const checkSnakeCase = (varName) => {
    if (typeof varName !== 'string') {
      throw new TypeError('Argument is not a string.')
    }
  
    const pat = /(.*?)_([a-zA-Z])*/
    return pat.test(varName)
  }