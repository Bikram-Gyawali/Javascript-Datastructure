const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise 1 resolved");
        reject("rejected promise 1");
    }, 400);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise 2 resolved");
      reject("rejected promise 2");
    }, 500);
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise 3 resolved");
      reject("rejected promise 3");
    }, 200);
  });

const getData = async () => {
  try {
    const beforeTime = new Date();
    await Promise.any([promise1(), promise2(), promise3()])
      .then((res) => console.log(res))
      .catch((err) => {
        console.log("Error " + err);
      });
    const afterTime = new Date();
    console.log((afterTime - beforeTime) / 1000 + " seconds");
  } catch (error) {
    console.log(error);
  }
};

getData();
