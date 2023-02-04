function throttle(func, delay) {
  let wait = false

  return (...args) => {
    if (wait) {
      return
    }

    func(...args)
    wait = true
    setTimeout(() => {
      wait = false
    }, delay)
  }
}

//   the throttle function will execute a provided function func, update a wait variable to true, and then starts a timer which will reset the wait parameter after the delay is passed. If the throttle function is called again it will either call the provided function or simply return if the wait parameter is still true.
