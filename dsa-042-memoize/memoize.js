/*
memoization is an optimization technique used primarily to speed the eresult of expensive function calls and returning the cached result whhen the same inputs occur again this is a first class objects which lets us use it as higher order function
*/

const memoize = (func) => {
  // initialiaze a slot to store the unique key and value pair here key are the element to calculate and value are the result after the calculation
  const cache = new Map();

  const jsonReplacer = (_, value) => {
    if (value instanceof Set) {
      // if the value is Set its concerrted to Array cause JSON.stringify cannot convert Set
      return [...value];
    }

    if (value instanceof Map) {
      return Object.fromEntries(value);
    }

    return value;
  };

  return (...args) => {
    /*
            arguments converted to json stirng foor use as a key of Map it's' easy to detect cocllectonas lilke Objects and Array
            if the arfs input is [new Set([1,2,3,4,5]),{namae:"rambik",age:"21"}] which is JSOn mean string 
            now tis ready to bee aperect ke for map
        */

    const argsKey = JSON.stringify(args, jsonReplacer);

    // check if the key is already present in the caches if present then return it to the new input having same key

    if (cache.has(argsKey)) {
      return cache.get(argsKey);
    }

    // if the argumentis nnot yet present in the cache execute original function and save its value result in cache then return it
    const result = func(...args);
    cache.set(argsKey, result);
  };
};
