import { PrimeFactors } from './PrimeFactors.js'
export const mobiusFunction = (number) => {
  const primeFactorsArray = PrimeFactors(number)
  if (number <= 0) {
    throw new Error('Number must be greater than zero.')
  }
  return primeFactorsArray.length !== new Set(primeFactorsArray).size ? 0 : primeFactorsArray.length % 2 === 0 ? 1 : -1
}