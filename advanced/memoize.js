function memoize(func) {
    const cache = new Map();
    return function() {
      const key = JSON.stringify(arguments);
      if (cache.has(key)) {
          return cache.get(key);
      }
      const result = func.apply(this, arguments);
      cache.set(key, result);
      return result;
    };
  }

//   Memoize is a JavaScript function, that is used to cache the results of a given function to prevent calling computationally expensive routines multiple times with the same arguments.