function Class(name, size) {
  var privateName = name;
  var privateSize = size;

  this.getName = () => {
    return privateName;
  };
  this.getSize = () => {
    return privateSize;
  };
  this.setName = (name) => {
    return (privateName = name);
  };
  this.setSize = (size) => {
    return (privateSize = size);
  };
}

var objects = new Class("Bikram", 7);
objects.setSize(12);
console.log(objects.privateName); //undefined
console.log(objects.privateSize); //undefined
console.log(objects.getName()); //bikram
console.log(objects.getSize()); ///12
console.log(objects.setName("bicky")); //bicky
