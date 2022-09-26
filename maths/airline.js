//logic to the solution is first make the seat objects(AISLE,WINDOW,MIDDLE) AND we create a mergedMatrix , 



const inp = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

const AISLE = {
  seated: false,
  type: "A",
};

const WINDOW = {
  seated: false,
  type: "W",
};

const MIDDLE = {
  seated: false,
  type: "M",
};

const passengersQueue = 30;

const matrixMerged = [];
let matrixMerged_row = 0;
let matrixMerged_col = 0;

// row breaks and matrixMerged
for (let i = 0; i < inp.length; i++) {
  matrixMerged_col =
  matrixMerged_col < inp[i][1] ? inp[i][1] : matrixMerged_col;
  matrixMerged_row += inp[i][0];
}

// make arrangment as 2x2 matrix now
for (i = 0; i < matrixMerged_row; i++) {
  matrixMerged[i] = [];
  for (j = 0; j < matrixMerged_col; j++) {
    matrixMerged[i].push(0); // lets fill in something
  }
}

offset = 0;
ri = 0; // for arragement matrix

// n^3 approach here
while (ri < inp.length) {
  i = 0;
  j = 0;

  let [current_row_limit, current_col_limit] = inp[ri];

  // fill for the aisle
  for (j = 0; j < current_col_limit; j++) {
    matrixMerged[offset][j] = offset === 0 ? { ...WINDOW } : { ...AISLE };
  }

  for (i = 1; i < current_row_limit; i++) {
    for (j = 0; j < current_col_limit; j++) {
      cai = offset + i;
      matrixMerged[cai][j] = { ...MIDDLE };
    }
  }

  // fill in the last for aisle
  // calculate for ailse or window later
  for (j = 0; j < current_col_limit; j++) {
    rai = offset + current_row_limit - 1;

    matrixMerged[rai][j] =
      rai === matrixMerged_row - 1 ? { ...WINDOW } : { ...AISLE };
  }

  offset += current_row_limit;
  ri++;
}

let total_passenger = 30;
// AISLE, WINDOW, CENTER

function fillPassenger(matrixMerged, pno, seat_type) {
  for (let i = 0; i < matrixMerged.length; i++) {
    for (let j = 0; j < matrixMerged[i].length; j++) {
      if (
        matrixMerged[i][j].type === seat_type &&
        matrixMerged[i][j].seated === false
      ) {
        matrixMerged[i][j].seated = `PASSENGER ${pno + 1}`;
        return true;
      }
    }
  }
  return false;
}

for (let i = 0; i < 30; i++) {
  const in_aisle = fillPassenger(matrixMerged, i, "A");
  if (!in_aisle) {
    const in_window = fillPassenger(matrixMerged, i, "W");
    if (!in_window) {
      const in_middle = fillPassenger(matrixMerged, i, "M");
      if (!in_middle) console.log(`PASSENGER ${i} cannot be seated`);
    }
  }
}

console.log(matrixMerged);
