const perfectCube = (num) => Number.isFinite(num) && Math.round(Math.cbrt(num)) ** 3 === num

export { perfectCube }