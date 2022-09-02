export const isPronic = (number) => {
    if (number === 0) {
      return true
    }
    const sqrt = Math.sqrt(number)
    return sqrt % 1 !== 0 && Math.ceil(sqrt) * Math.floor(sqrt) === number
  }