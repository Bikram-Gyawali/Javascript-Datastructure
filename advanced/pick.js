function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}

// The Pick function in JavaScript is used to select specific values from an object. It is a way to create a new object by selecting certain properties from a provided project. It is a functional programming technique that allows extracting a subset of properties from any object if the properties are available .


const obj = {
    id: 1,
    name: 'Paul',
    password: '82ada72easd7',
    role: 'admin',
    website: 'https://www.paulsblog.dev',
};

const selected = pick(obj, ['name', 'website']);
console.log(selected); // { name: 'Paul', website: 'https://www.paulsblog.dev' }