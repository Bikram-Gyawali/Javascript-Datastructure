function once(func) {
    let ran = false;
    let result;
    return function() {
      if (ran) return result;
      result = func.apply(this, arguments);
      ran = true;
      return result;
    };
  }


  