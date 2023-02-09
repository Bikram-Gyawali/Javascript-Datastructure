function pipe(...funcs) {
    return function piped(...args) {
      return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0];
    };
  }