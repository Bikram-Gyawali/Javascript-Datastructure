/**
 * find second largest is a real tecnical interview question .
 * */

const secondLargestElement = (array) => {
  const largestElement = Math.max(...array);
  let element = 0;
  for (let i = 0; i < array.length; i++) {
    if (element < array[i] && array[i] !== largestElement) {
      element = array[i];
    }
  }
  return element;
};
