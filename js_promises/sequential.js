function testOne(time) {
  console.log("test one called");
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve();
      console.log("test one resolved");
    }, time);
  });
}

function testTwo(time) {
  console.log("test two called");
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve();
      console.log("test two resolved");
    }, time);
  });
}

console.time("startTime");
testOne(1000);
console.log("--------------------");

testTwo(1000);
// console.time("endTime")
// console.log("Promise all")
// Promise.all([testOne(1000),testTwo(1000)])
