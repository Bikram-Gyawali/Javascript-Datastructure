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


//   The Once function is a method that will prevent executing if already called. This is especially useful while working with event listeners, where you often encounter functions that only should run once. Instead of removing event listeners every time you can use the Once function in JavaScript.