const heros = [
  { fullname: "natasha", age: 15 },
  { fullname: "batman", age: 20 },
  { fullname: "tony stark", age: 65 },
];

const superHero = [
  { fullname: "dr strange", age: 35 },
  { fullname: "thor god of thunder", age: 500 },
  { fullname: "chris evans", age: 200 },
  { fullname: "spider man", age: 20 },
  { fullname: "tony stark", age: 65 },
  { fullname: "natasha", age: 15 },
  { fullname: "batman", age: 20 },
];

async function getSelfMadeHeros(heros, character) {
  return new Promise(async (resolve, reject) => {
    const user = heros.find((hero) => hero.fullname === character);
    if (user) {
      resolve(user);
    } else {
      reject(character + "is not self made hero");
    }
  });
}

const promise = getSelfMadeHeros(heros, "tony stark");

promise
  .then((user) => {
    console.log(`${user.fullname} is hero and also`);
    return new Promise((resolve, reject) => {
      let selfMadeHero = superHero.find((hero) => {
        return hero.fullname === user.fullname;
      });
      //   console.log("hello", selfMadeHero);
      if (selfMadeHero) {
        resolve(user);
      } else {
        reject(`${user.fullname} is not a self-made hero`);
      }
    });
  })
  .then((user) => {
    console.log(`${user.fullname} is a self-made hero`);
  })
  .catch((err) => {
    console.log(err);
  });
