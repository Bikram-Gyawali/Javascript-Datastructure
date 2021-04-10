// learniing the array function methods
[1, 2, 3, 4, 5, 6].map((val) => {
  return val + 20;
  console.log(val);
});

[12, 13, 15, 18, 20].filter((valu) => {
  return valu % 3 == 0;
  console.log(valu);
});

var sum = [1, 2, 3, 4, 5].reduce((prevVal, currentVal, index, array) => {
  return prevVal + currentVal;
});
