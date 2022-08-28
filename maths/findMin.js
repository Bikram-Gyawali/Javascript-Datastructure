const findMin = (...nums) => {
    if (nums.length === 0) {
      throw new TypeError('Array is empty')
    }
  
    let min = nums[0]
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i]
      }
    }
  
    return min
  }
  
  export { findMin }
  