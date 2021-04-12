function diffrence(setA, setB) {
  var diffrence = new Set(setA);
  for (var elem of setB) {
    diffrence.delete(elem);
  }
  return diffrence;
}
var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
console.log(diffrence(setA, setB));
