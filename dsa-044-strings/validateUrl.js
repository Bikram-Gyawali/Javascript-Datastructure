const validateURL = (url) => {
  const URL_PATTERN =
    /^(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/gi;

  return URL_PATTERN.test(url);
};
console.log(validateURL("https://google.com")); //true

console.log(validateURL("hettp://bikram.com")); //false

