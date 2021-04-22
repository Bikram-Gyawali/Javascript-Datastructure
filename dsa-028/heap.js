// a heap is a type of tree like data structire in whichh the parent is biggere than its children oe samller than the children.This proprtyof heaps smakes it useful for sorting data
// we will be working on only binary heap
// There are two  types of heap:-
// 1 Min heap->In mean heap the root node has the lowest value and each  nodes value is smaller than its children
// 2 Max heap->IN max hap the root nide has the highest value and each node value is greater then its children
function Heap() {
  this.items = [];
}
Heap.prototype.swap = function (index1, index2) {
  var temp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = temp;
};
Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2);
};
Heap.prototype.leftChildrenIndex = function (index) {
  return index * 2 + 1;
};

Heap.prototype.rightChildrenIndex = function (index) {
  return index * 2 + 2;
};
Heap.prototype.parent = function (index) {
  return this.items[this.parentIndex(index)];
};
Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildrenIndex(index)];
};

Heap.prototype.rightChild = function (index) {
  return this.items[this.rightChildrenIndex(index)];
};
Heap.prototype.peek = function (item) {
  return this.items[0];
};
Heap.prototype.size = function () {
  return this.items.length;
};

// implementing bubblinng up and down
function MinHeap() {
  this.items = [];
}
MinHeap.prototype = Object.create(Heap.prototype); //inheriting the heap prototype
MinHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    var smallerIndex = this.leftChildIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[smallerIndex]
    ) {
      //   if right is smaller ,right swaps
      smallerIndex = this.rightChildIndex(index);
    }
    this.swap(smallerIndex, index);
    index.smallerIndex;
  }
};
MinHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

// implementing min heeap
function MinHeap() {
  this.items = [];
}
MinHeap.prototype = Object.create(Heap.prototype); // inherit helpers from heap by copying prototype
MinHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    var smallerIndex = this.leftChildIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[smallerIndex]
    ) {
      // if right is smaller, right swaps
      smallerIndex = this.rightChildrenIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
};

MinHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};
function MinHeap() {
  this.items = [];
}
MinHeap.prototype = Object.create(Heap.prototype); // inherit helpers from heap by copying prototype
MinHeap.prototype.add = function (item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
};

MinHeap.prototype.poll = function () {
  var item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
};

MinHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (
    this.leftChild(index) &&
    (this.leftChild(index) < this.items[index] ||
      this.rightChild(index) < this.items[index])
  ) {
    var smallerIndex = this.leftChildrenIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[smallerIndex]
    ) {
      smallerIndex = this.rightChildrenIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
};
MinHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

var mh1 = new MinHeap();
mh1.add(1);
mh1.add(30);
mh1.add(5);
mh1.add(110);
mh1.add(80);

console.log(mh1.poll()); // 1
console.log(mh1.poll()); // 5
console.log(mh1.poll()); // 80
console.log(mh1.poll()); // 30
console.log(mh1.poll()); // 110
function MaxHeap() {
  this.items = [];
}
MaxHeap.prototype = Object.create(Heap.prototype); // inherit helpers from heap by copying prototype
MaxHeap.prototype.add = function (item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
};
MaxHeap.prototype.poll = function () {
  var item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
};

MaxHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (
    this.leftChild(index) &&
    (this.leftChild(index) > this.items[index] ||
      this.rightChild(index) > this.items[index])
  ) {
    var biggerIndex = this.leftChildrenIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) > this.items[biggerIndex]
    ) {
      biggerIndex = this.rightChildrenIndex(index);
    }
    this.swap(biggerIndex, index);
    index = biggerIndex;
  }
};

MaxHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) < this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

var mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(10);
mh2.add(80);

console.log(mh2.poll());
console.log(mh2.poll());
console.log(mh2.poll());
console.log(mh2.poll());
console.log(mh2.poll());
var minHeapExample = new MinHeap();
minHeapExample.add(12);
minHeapExample.add(2);
minHeapExample.add(23);
minHeapExample.add(4);
minHeapExample.add(13);
minHeapExample.items;

console.log(minHeapExample.poll());
console.log(minHeapExample.poll());
console.log(minHeapExample.poll());
console.log(minHeapExample.poll());
console.log(minHeapExample.poll());
var maxHeapExample = new MaxHeap();
maxHeapExample.add(10);
maxHeapExample.add(20);
maxHeapExample.add(22);
maxHeapExample.add(3);
maxHeapExample.add(3);
maxHeapExample.items;

console.log(maxHeapExample.poll());
console.log(maxHeapExample.poll());
console.log(maxHeapExample.poll());
console.log(maxHeapExample.poll());
console.log(maxHeapExample.poll());
var array1 = [10, 23, 1, 45, 19, 16, 00, 100];
function getKthSmallestValue(array, k) {
  var minH = new MinHeap();
  for (var i = 0; i < array1.length; i++) {
    minH.add(array[i]);
  }
  for (var i = 1; i < k; i++) {
    minH.poll();
  }
  return minH.poll();
}

console.log(getKthSmallestValue(array1, 2));
console.log(getKthSmallestValue(array1, 3));
console.log(getKthSmallestValue(array1, 5));
