
 const mean = (nums) => {
    if (!Array.isArray(nums)) {
      throw new TypeError('Invalid Input')
    }
  
    //sums all values in the 'nums' array using forEach loop
    const sum = nums.reduce((sum, cur) => sum + cur, 0)
  
    // Divide sum by the length of the 'nums' array.
    return sum / nums.length
  }
  
  export { mean }
  