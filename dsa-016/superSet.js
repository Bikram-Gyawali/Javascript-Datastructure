function superSet(setA, sub) {
  for (var elem of sub) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([1, 2]);
var setC = new Set([5]);

superSet(setA, setB);
superSet(setA, setC);
console.log(superSet(setA, setB), superSet(setA, setC));
