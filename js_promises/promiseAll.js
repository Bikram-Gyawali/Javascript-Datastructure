const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 400);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 500);
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    //   reject("rejected promise 3");
    }, 900);
  });

const getData = async () => {
  try {
    // const beforeTime = new Date();
    // console.log(await promise1(), await promise2(), await promise3());
    // const afterTime = new Date();
    // console.log((afterTime - beforeTime) / 1000);

    const beforeTime = new Date();
    await Promise.all([promise1(), promise2(), promise3()])
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
    const afterTime = new Date();
    console.log((afterTime - beforeTime) / 1000 + " seconds");
  } catch (error) {
    console.log(error);
  }
};

getData();
