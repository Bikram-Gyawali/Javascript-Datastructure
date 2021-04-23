function KnapSack(index, weights, values, target, matrixDP) {
  var result = 0;

  if (matrixDP[index + "-" + target]) {
    return matrixDP[index + "-" + target];
  }

  if (index <= -1 || target <= 0) {
    result = 0;
  } else if (weights[index] > target) {
    result = KnapSack(index - 1, weights, values, target);
  } else {
    var current = KnapSack(index - 1, weights, values, target);
    var currentPlusOther =
      values[index] +
      KnapSack(index - 1, weights, values, target - weights[index]);
    console.log("current", current);
    console.log("currentplus", currentPlusOther);
    result = Math.max(current, currentPlusOther);
  }
  matrixDP[index + "-" + target] = result;
  return result;
}
var weights = [1, 2, 4, 2, 5];
var values = [5, 3, 5, 3, 2];
var target = 10;

console.log(KnapSack(4, weights, values, target, {}));
