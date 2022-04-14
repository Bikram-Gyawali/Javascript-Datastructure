/**
 * a permutation of a set is ,an arrangement of its membeeres into  sequence orl ineear order or if the set is already ordered a rearrangeement of its elements
 * */

const createPermutations = (str) => {
  const arr = str.split("");

  const len = arr.length;

  const res = [];

  let rest, picked, restPerms, next;

  // if string length is zero, return the same string
  if (len === 0) return [str];

  for (let i = 0; i < len; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = createPermutations(rest.join(""));

    for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(""));
    }
  }
  return perms;
};
