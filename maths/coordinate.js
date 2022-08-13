const euclideanDistance = (longitude1, latitude1, longitude2, latitude2) => {
    const width = longitude2 - longitude1
    const height = latitude2 - latitude1
    return (Math.sqrt(width * width + height * height))
  }
  
  const manhattanDistance = (longitude1, latitude1, longitude2, latitude2) => {
    const width = Math.abs(longitude2 - longitude1)
    const height = Math.abs(latitude2 - latitude1)
    return width + height
  }
  
  export { euclideanDistance, manhattanDistance }
  