function unionSet(setA, setB) {
  var union = new Set(setA);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
}
var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
var setC = new Set([5]);

console.log(unionSet(setA, setB), unionSet(setA, setC));
