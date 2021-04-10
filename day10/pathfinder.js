var board = `%b%%%%%%%%%\n
   %...%.%...%\n
   %.%.%.%.%%%\n
   %.%.......%\n
   %.%%%%.%%.%\n
   %.%.....%m%\n
   %%%%%%%%%%%`;

var smallboard = `%b%%%%\n
                  %....m`;

var rows = board.split("\n");

var mazeMatrix = smallboard.split("\n").map((arr) => {
  return arr.split("");
});

function findChar(char, mazeMatrix) {
  var row = mazeMatrix.length;
  console.log(mazeMatrix[0]);
  var col = mazeMatrix[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (mazeMatrix[i][j] == char) {
        return [i, j];
      }
    }
  }
  return 0;
}

function printMatrix(matrix) {
  var mazePrintStr = "";
  var row = matrix.length;
  var column = matrix[0].length;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      mazePrintStr += mazeMatrix[i][j];
    }

    mazePrintStr += "\n";
  }
  console.log(mazePrintStr);
  console.log(`\n\n\n`);
}
function mazePathFinder(mazeMatrix) {
  var row = mazeMatrix.length;
  var col = mazeMatrix[0].length;
  console.log(col, row);
  var startPos = findChar("b", mazeMatrix);
  console.log(startPos);
  var endPos = findChar("m", mazeMatrix);

  path(startPos[0], startPos[1]);

  function path(x, y) {
    if (x > row - 1 || y > col - 1 || x < 0 || y < 0) {
      return false;
    }
    if (x == endPos[0] && y == endPos[1]) {
      return true;
    }
    if (mazeMatrix[x][y] == "%" || mazeMatrix[x][y] == "+") {
      return false;
    }
    mazeMatrix[x][y] = "+";
    printMatrix(mazeMatrix);
    if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
      return true;
    }
    mazeMatrix[x][y] = ".";
    return false;
  }
}

mazePathFinder(mazeMatrix);
