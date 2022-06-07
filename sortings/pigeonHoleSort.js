/***
 * pigeon hole sorting is a sorting algorthm that is suitable for sorting lists of  elemets where the number of elements n and the length of the range possible key values (N) are approximamtely the same.
 *
 */

const pigeonHoleSort = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  const range = max - min + 1;
  const pigeonHole = Array(range).fill(0);

  for (let i = 0; i < arr.length; i++) {
    pigeonHole[arr[i] - min]++;
  }

  let index = 0;

  for (let j = 0; j < range; j++) {
    while (pigeonHole[j]-- > 0) {
      arr[index++] = j + min;
    }
  }
  return r;
};
