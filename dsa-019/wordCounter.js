// this program counts the repeted words in a given sentence

function countWord(sentence) {
  // the . fullstop is not counted as a word
  var wordsList = sentence.replace(/[.]/g, "").split(" ");
  //   console.log(wordsList);
  var occurenceList = {};
  var answerList = {};

  for (var i = 0; i < wordsList.length; i++) {
    var currentWord = wordsList[i];
    if (!occurenceList[currentWord]) {
      occurenceList[currentWord] = 1;
    } else {
      occurenceList[currentWord]++;
    }
  }
  var arrayTemp = [];
  for (var prop in occurenceList) {
    arrayTemp.push([occurenceList[prop], prop]);
  }
  function sortComp(a, b) {
    return b[0] - a[0];
  }
  arrayTemp.sort(sortComp);

  for (var i = 0; i < arrayTemp.length; i++) {
    var current = arrayTemp[i];
    answerList[current[1]] = current[0];
  }
  return answerList;
}
console.log(
  countWord("practice makes perfect . get perfect by practice . just practice")
);
