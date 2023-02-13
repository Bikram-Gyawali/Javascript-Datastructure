function omit(obj, keys) {
    return Object.keys(obj)
      .filter(key => !keys.includes(key))
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
  }