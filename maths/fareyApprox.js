function fareyApproximation (decimal, repeat = 20) {
    let a = 0; let b = 1; let c = 1; let d = 1; let numerator; let denominator
  
    for (let i = 0; i < repeat; i++) {
      numerator = a + c
      denominator = b + d
  
      if (decimal > numerator / denominator) {
        [a, b] = [numerator, denominator]
      } else {
        [c, d] = [numerator, denominator]
      }
    }
  
    return { numerator, denominator }
  }