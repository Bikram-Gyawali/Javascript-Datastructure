/*
    Flood Fill also called the seed fill it is an algorithm that determines and alter the area connected to a given node in a multi dimension array with some matching attribute It is used in the bucket fill toll ofo paint programs to fill colors
*/

const neighbours = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

// implemeenting flood fill algorithm through a breadth-first search aproach using queue
// rgbData=image to which the algorithm is applied
// location=start location on the imagee
// oldColor=old color position
// newColor=new color to be placed replacing the old one

export function breadthFirstSearch(rgbData, location, oldColor, newColor) {
  if (
    location[0] < 0 ||
    location[0] >= rgbData.length ||
    location[1] < 0 ||
    location[1] >= rgbData[0].length
  ) {
    throw new Error("location point out of pixel bound");
  }
  const queue = [];
  queue.push(location);

  while (queue.length > 0) {
    breadthFirstSearch(rgbData, location, oldColor, newColor);
  }
}
