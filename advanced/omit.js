function omit(obj, keys) {
    return Object.keys(obj)
      .filter(key => !keys.includes(key))
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
  }

  const obj = {
    id: 1,
    name: 'Paul',
    job: 'Senior Engineer',
    twitter: 'https://www.twitter.com/paulknulst',
    website: 'https://www.paulsblog.dev',
};

const selected = omit(obj, ['id']);
console.log(selected); 