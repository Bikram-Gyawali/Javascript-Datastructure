export function collatz (n) {
    const steps = []
  
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2
      } else {
        n = 3 * n + 1
      }
  
      steps.push(n)
    }
  
    return { result: n, steps: steps }
  }
  