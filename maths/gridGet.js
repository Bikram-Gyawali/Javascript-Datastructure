
const gridGetX = (columns, index) => {
    while (index + 1 > columns) {
      index = index - columns
    }
    return index + 1
  }
  
  const gridGetY = (columns, index) => {
    return Math.floor(index / columns) + 1
  }
  
  export { gridGetX, gridGetY }
  