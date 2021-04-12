//finding pascal vallue using reecursion method

function pascalTriangle(row, col) {
  if (col == 0) {
    return 1;
  } else if (row == 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}

pascalTriangle(5, 0);
console.log(pascalTriangle(5, 1));
