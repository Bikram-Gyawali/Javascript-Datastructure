// this algorithm is use to search all the instance of pattern in given text

const computeLPS = (pattern) => {
  const lps = Array(pattern.length);
  lps[0] = 0;
  for (let i = 1; i < pattern.length; i++) {
    let matched = lps[i - 1];
    while (matched > 0 && pattern[i] !== pattern[matched]) {
      matched = lps[matched - 1];
    }
    if (pattern[i] === pattern[matched]) {
      matched++;
    }
    lps[i] = matched;
  }
  return lps;
};

//return the indexes where pattern starts in text

const KMPSearch = (text, pattern) => {
  if (!pattern || !text) {
    return [];
  }

  const lps = computeLPS(pattern);
  const result = [];

  let matched = 0;
  for (let i = 0; i < text.length; i++) {
    while (matched > 0 && text[i] !== pattern[matched]) {
      matched = lps[matched - 1];
    }
    if (text[i] === pattern[matched]) {
      matched++;
    }
    if (matched === pattern.length) {
      result.push(i - pattern.length + 1);
      matched = lps[matched - 1];
    }
  }
  return result;
};

console.log(
  KMPSearch("Hello world or this is for new or at index 1 or 2 or 4", "or")
);
