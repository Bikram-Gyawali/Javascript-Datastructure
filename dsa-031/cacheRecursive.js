function coverStepDp(step) {
  var cache = {};
  if (step < 0) return 0;
  if (step == 0) return 1;
  // check if required result exist in the cache
  if (cache[step]) {
    return cache[step];
  } else {
    cache[step] =
      coverStepDp(step - 1) + coverStepDp(step - 2) + coverStepDp(step - 3);
    return cache[step];
  }
}
console.log(coverStepDp(12));
