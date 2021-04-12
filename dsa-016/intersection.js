function intersectionSet(setA, setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
var setA = new Set([1, 2, 3, 4, 5]),
  setB = new Set([2, 3]);
console.log(intersectionSet(setA, setB));
