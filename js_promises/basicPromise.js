const users = [
  { fullname: "john doe", age: 15 },
  { fullname: "jane foster", age: 20 },
];


async function getUsers(users) {
  return new Promise(async (resolve, reject) => {
    const user = users.find((user) => user.fullname === "john does");
    if (user) {
      resolve(user);
    }
    reject("no user found");
  });
}

const promise = getUsers(users);

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
