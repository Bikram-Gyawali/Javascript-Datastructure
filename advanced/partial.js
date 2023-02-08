function partial(func, ...args) {
    return function partiallyApplied(...moreArgs) {
      return func(...args, ...moreArgs);
    }
  }

//   The Partial function in JavaScript is similar to the Curry function. The significant difference between Curry and Partial is that a call to a Partial function returns the result instantly instead of returning another function down the currying chain. 