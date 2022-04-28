// it returns the most reoccurin word in a sentence

const maxWord = (sentence = "") => {
  if (typeof sentence !== "string") {
    throw new TypeError("the param should be string");
  }
  if (!sentence) {
    return null;
  }

  const words = sentence.split(" ");
  if (words.length < 2) {
    return words[0];
  }

  const occurrences = {};
  words.forEach((word) => {
    occurrences[word.toLocaleLowerCase()] =
      occurrences[word.toLocaleLowerCase()] + 1 || 1;
  });
  const max = Object.keys(occurrences).reduce(
    (n, word) => {
      if (occurrences[word] > n.count) {
        return { word, count: occurrences[word] };
      } else {
        return n;
      }
    },
    { word: "", count: 0 }
  );
  console.log("logss", occurrences);

  return max.word;
};
console.log(
  maxWord(
    "What do you think which is the most repeated word in the sentence i am writing . I think I is the most repeated word cause I love you as always I do ."
  )
);
// i
