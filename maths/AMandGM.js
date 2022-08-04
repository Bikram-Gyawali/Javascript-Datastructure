/**
 * @function agm
 * @description This finds the Arithmetic-Geometric Mean between any 2 numbers.
 * @param {Number} a - 1st number, also used to store Arithmetic Mean.
 * @param {Number} g - 2nd number, also used to store Geometric Mean.
 * @return {Number} - AGM of both numbers.
 * @see [AGM](https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean)
 */

 export const agm = (a, g) => {
    if (a === Infinity && g === 0) return NaN
    if (Object.is(a, -0) && !Object.is(g, -0)) return 0
    if (a === g) return a //to avoid rounding errors, and increase efficiency
    let x // temp var
    do {
      [a, g, x] = [(a + g) / 2, Math.sqrt(a * g), a]
    } while (a !== x && !isNaN(a))
  
    return a
  }
  