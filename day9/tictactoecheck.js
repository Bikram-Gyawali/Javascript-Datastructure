function checkRow(rowaArr, letter) {
  for (var i = 0; i < 3; i++) {
    if (rowaArr[i] != letter) {
      return false;
    }
  }
  return true;
}
function checkColumn(gameBoardMatrix, columnIndex, letter) {
  for (var i = 0; i < 3; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
}

function tictactoe(gameBoardMatrix, letter) {
  var rowWin =
    checkRow(gameBoardMatrix[0], letter) ||
    checkRow(gameBoardMatrix[1], letter) ||
    checkRow(gameBoardMatrix[2], letter);
  var colWin =
    checkColumn(gameBoardMatrix, 0, letter) ||
    checkColumn(gameBoardMatrix, 1, letter) ||
    checkColumn(gameBoardMatrix, 2, letter);

  var diagonalWinLeftToRight =
    gameBoardMatrix[0][0] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][2] == letter;

  var diagonalWinRightToLeft =
    gameBoardMatrix[0][2] == letter &&
    gameBoardMatrix[2][0] == letter &&
    gameBoardMatrix[1][1] == letter;

  return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}

var board = [
  ["O", "-", "O"],
  ["X", "X", "X"],
  ["X", "O", "O"],
];
tictactoe(board, "X");
console.log("X winns the game", tictactoe(board, "X"));
tictactoe(board, "O");
console.log("O winns the game", tictactoe(board, "O"));
