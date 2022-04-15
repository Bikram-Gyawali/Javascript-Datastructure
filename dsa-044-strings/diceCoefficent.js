/**
 * the dice coeff is a static used to gauge the similarity of two samples applied to strings it can give you a value between 0 and 1  which definies the degree of similarity .
 * dice coeff is calculated by comparing the bigrams of 2 strings
 * a bigram is a sub string of length of 2
 * */

// time complexity is : o(m+n), m and n are size of strings

// find the bistring of a string and return a hashmap(key-> bisring, value-> count)

function mapBigrams(string) {
  const bigrams = new Map();
  for (let i = 0; i < string.length - 1; i++) {
    const bigram = string.substring(i, i + 2);
    const count = bigrams.get(bigram);
    bigrams.set(bigram, (count || 0) + 1);
  }
  return bigrams;
}

// calculate the number of common bigrams between a map of bigrams and string
function countCommonBigrams(bigrams, string) {
  let count = 0;
  for (let i = 0; i < string.length - 1; i++) {
    const bigram = string.substring(i, i + 2);
    if (bigrams.has(bigram)) count++;
  }
  return count;
}

//calculate dice coeff of 2 strings
function diceCoeff(stringA, stringB) {
  if (stringA === stringB) return 1;
  else if (stringA.length < 2 || stringB.length < 2) return 0;

  const bigramsA = mapBigrams(stringA);

  const lengthA = stringA.length - 1;
  const lengthB = stringB.length - 1;

  let dice = (2 * countCommonBigrams(bigramsA, stringB)) / (lengthA + lengthB);

  dice = Math.floor(dice * 100) / 100;

  return dice;
}


console.log(diceCoeff("bikram","bicky"));