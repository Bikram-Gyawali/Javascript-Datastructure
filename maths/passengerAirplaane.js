const inp = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

// console.log("window seat");
// console.log(inp[0][1]);
// console.log(inp[inp.length - 1][1]);

// console.log("ailse seat");
// console.log(inp[0][1]);
// console.log(inp[1][1]);
// console.log(inp[2][1]);
// console.log(inp[3][1]);
// console.log(inp.length);
// console.log("middle seat");
// console.log(inp[1][1]);

const passengersQueue = 30;

// let windowSeat, aisleSeat, middleSeat;

let seat = { type: ["w", "M", "P"], seated: false };
let matrixSeat = [];
const createMatrix = (inp) => {
  let inc = 0;
//   console.log("matrix first");
//   for (i = 0; i < 3; i++) {
//     for (j = 0; j < 2; j++) {
//       inc = inc + 1;
//     }
//     console.log(" -- ");
//   }

  let arr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      arr[i] = [];
    }
  }
  console.log(arr);
};

createMatrix(inp);
