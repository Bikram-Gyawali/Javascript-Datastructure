function compose(...funcs) {
    return function composed(...args) {
      return funcs.reduceRight((result, func) => [func.call(this, ...result)], args)[0];
    };
  }