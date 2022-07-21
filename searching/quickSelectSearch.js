/*
 * Places the `k` smallest elements in `array` in the first `k` indices: `[0..k-1]`
 * Modifies the passed in array *in place*
 * Returns a slice of the wanted elements for convenience
 * Efficient mainly because it never performs a full sort.
 *
 * The only guarantees are that:
 *
 * - The `k`th element is in its final sort index (if the array were to be sorted)
 * - All elements before index `k` are smaller than the `k`th element
 *
 */
export function quickSelectSearch (array, k) {
    if (!array || array.length <= k) {
      throw new Error('Invalid arguments')
    }
  
    let from = 0
    let to = array.length - 1
    while (from < to) {
      let left = from
      let right = to
      const pivot = array[Math.ceil((left + right) * 0.5)]
  
      while (left < right) {
        if (array[left] >= pivot) {
          const tmp = array[left]
          array[left] = array[right]
          array[right] = tmp
          --right
        } else {
          ++left
        }
      }
  
      if (array[left] > pivot) {
        --left
      }
  
      if (k <= left) {
        to = left
      } else {
        from = left + 1
      }
    }
    return array
  }
  
  