function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";
  var hashedIndex = this.hash(key);
  var squareIndex = 1;
  // quadratic index
  while (this.keys[hashedIndex] != null) {
    hashedIndex += Math.pow(squareIndex, 2);
    hashedIndex;
    squareIndex++;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  var hashedIndex = this.hash(key);
  squareIndex = 1;
  while (this.keys[hashedIndex] != key) {
    hashedIndex += Math.pow(squareIndex, 2);
    hashedIndex = hashedIndex % this.size;
    squareIndex++;
  }
  return this.values[hashedIndex];
};

HashTable.prototype.initArray = function (size) {
  var array = [];
  for (var i = 0; i < size; i++) {
    array.push(null);
  }
  return array;
};

var exampleTable = new HashTable(13);
exampleTable.put(7, "hi");
exampleTable.put(20, "hello");
exampleTable.put(33, "sunny");
exampleTable.put(46, "ram");
exampleTable.put(59, "wow");
exampleTable.put(72, "forty");
exampleTable.put(85, "happy");
exampleTable.put(988, "sad");
