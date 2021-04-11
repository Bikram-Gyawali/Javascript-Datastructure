var matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

function rotateLeft(mat) {
  var N = mat.length;
  for (var x = 0; x < N / 2; x++) {
    for (var y = x; y < N - x - 1; y++) {
      var temp = mat[x][y];
      //   move valus from right to top
      console.log("x", x);
      console.log("y", y);
      mat[x][y] = mat[y][N - 1 - x];
      //   move vlues from bottom to right
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];
      //   move values from left to bottom
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];
      mat[N - 1 - y][x] = temp;
    }
  }
}
console.log(matrix);
rotateLeft(matrix);
console.log(matrix);
