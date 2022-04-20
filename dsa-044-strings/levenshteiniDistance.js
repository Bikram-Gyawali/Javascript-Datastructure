/**
 * the levenshtein distance (edit distance) is a measure of similarity between two strings. It is defined as the minimum numbere of changes required to convert string a into string b (this is done by inserting , deleting , or replacing a character in string a).
 * the smaller the distance the more the similar string are. Thiis is a very comon poblem in the application of Dynamic Programming
 * */

const levenshteinDistance = (a, b) => {
  // declaring array 'D' with rows = len(a) + 1 and columns = len(b) + 1
  const distanceMatrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  // initializing first column
  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }

  //initializing first column
  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indictor = a[i - 1] === b[j - 1] ? 0 : 1;
      //choosing minimum of all three,
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1, // deletion
        distanceMatrix[j - 1][i] + 1, // insertion
        distanceMatrix[j - 1][i - 1] + indicator // substitution
      )
    }
  }
  return distanceMatrix[b.length][a.length];
};
