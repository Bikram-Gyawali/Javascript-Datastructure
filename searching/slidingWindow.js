/**
* Sliding Window:
* This pattern involve creating a window which can either be
* an array or numbers from one position to another.
*/

function slidingWindow (arr, num) {
    // Edge Case:
    // If the length of the array shorter than the window size (num) return null.
    if (arr.length < num) return null
    // The highest amount of consecutive numbers
    let maxSum = 0
    // Temp amount of consecutive numbers - For comparative purpose
    let tempSum = 0
    for (let i = 0; i < num; i++) {
      maxSum += arr[i]
    }
    // initialize {tempSum} to {maxSum}.
    tempSum = maxSum
    // loop over the array n times
    for (let i = num; i < arr.length; i++) {
      // Add the next num in the array and remove the first one
      tempSum = tempSum - arr[i - num] + arr[i]
      // save the largest number between {maxNum} and {tempNum} in maxSum.
      maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
  }
  
  export { slidingWindow }
  