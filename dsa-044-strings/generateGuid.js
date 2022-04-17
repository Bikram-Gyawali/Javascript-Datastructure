/**
 * this functio genrates uuid/guid value.This below sciript uses math.random in combination  with the timestamp for better randomness the function generate an RFC4122 version 4 uuid/guid
 * */

const uuid = () => {
  const pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let currentDateMilliseconds = new Date().getTime();
  return pattern.replace(/[xy]/g, (currentChar) => {
    const randomChar = (currentDateMilliseconds + Math.random() * 16) % 16 | 0;
    currentDateMilliseconds = Math.floor(currentDateMilliseconds / 16);
    return (
      currentChar === "x" ? randomChar : (randomChar & 0x7) | 0x8
    ).toString(16);
  });
};

console.log(uuid());