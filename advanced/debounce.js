function debounce(func, delay) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), delay)
  }
}

//   In this JavaScript snippet, the debounce function will return a new function that executes the original function after a previously defined delay. If the function is called again, the timeout will be reset, and calling the function will be postponed.
