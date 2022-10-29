const sortObjects = (arr) => {
    return arr.sort((a, b) => (a.population > b.population) ? 1 : -1);
  }