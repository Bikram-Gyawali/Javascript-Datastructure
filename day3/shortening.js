// continuing my journey to the datastructure and algorithm today i am learning about url shortning
// For the shortening part, the following algorithm can be used. There are 62 possible
// letters and numbers, consisting of 26 lowercase letters, 26 uppercase letters, and 10
// numbers (0 to 9).

var URL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
  ""
);

function encodeId(num) {
  var base = URL.length;
  var encoded = "";

  if (num === 0) {
    return URL[0];
  }

  while (num > 0) {
    encoded += URL[num % base];
    num = Math.floor(num / base);
  }

  return reverseWord(encoded);
}
function reverseWord(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

function decodeId(id) {
  var base = URL.length;
  var decoded = 0;
  for (var index = 0; index < id.split("").length; index++) {
    decoded = decoded * base + URL.indexOf(id.charAt(index));
  }
  return decoded;
}
console.log(encodeId(1036792160)); // prints 'VhU2'
console.log(decodeId("bikram")); // prints '11231230
