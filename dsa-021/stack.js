function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = () => {
  return this.array.length == 0;
};

// INSTANCE OF STACK CLASS
var stack1 = new Stack();
console.log(stack1);

Stack.prototype.peek = () => {
  return this.array[this.array.length - 1];
};
stack1.push(10);
console.log(stack1.peek());
stack1.push(5);
console.log(stack1);

Stack.prototype.pop = function () {
  return this.array.pop();
};

stack1.pop(1);
stack1.pop(2);
stack1.pop(3);
console.log(stack1);

// TO GET THE ELEMTNT OF ANY INDEX IN AN ARRAY ON ONE GO
function stackAccessNode(stack, n) {
  if (n < 0) {
    throw "error";
  }
  var bufferArray = stack.getBuffer();
  var bufferStack = new Stack(bufferArray);
  while (--n !== 0) {
    bufferArray.pop();
  }
  return bufferStack.pop();
}

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);

stackAccessNode(stack2, 2);

function stackSearch(stack, element) {
  var bufferArray = stack.getBuffer();
  var bufferArray = new Stack(bufferArray);
  while (!bufferArray.isEmpty()) {
    if (bufferArray.pop() == element) {
      return true;
    }
  }
  return false;
}
var stack3 = new Stack();
stack3.push(1);
stack3.push(2);
stack3.push(3);
stackSearch(stack3, 3);

function Queue(array) {
  this.array = [];
  if (array) thiss.array = array;
}
Queue.prototype.getBuffer = () => {
  return this.array.slice();
};
Queue.prototype.isEmpty = () => {
  return this.array.length == 0;
};
// INSTANCE OF THE QUEUE CLASS
var queue1 = new Queue();
Queue.prototype.peek = () => {
  return this.array[0];
};
Queue.prototype.enqueue = (value) => {
  return this.array.pushh(value);
};
Queue.prototype.enqueue = (value) => {
  return this.array.push(value);
};
Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};
Queue.prototype.dequeue = () => {
  return this.array.shift();
};

var queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1);
queue1.dequeue();
console.log(queue1);

queue1.dequeue();
console.log(queue1);

function queueAccessNthTopNode(queue, n) {
  if (n <= 0) throw "error";
  var bufferArray = queue.getBuffer();
  var bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
}

function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer();
  var bufferQueue = new Queue(bufferArray);
  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() == element) {
      return true;
    }
  }
  return false;
}
function TwoStackQueue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (val) {
  this.inbox.push(val);
};

TwoStackQueue.prototype.dequeue = function () {
  if (this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};
var queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // 3

function QueueStack() {
  this.inbox = new Queue(); // first stack
}

QueueStack.prototype.push = function (val) {
  this.inbox.enqueue(val);
};

QueueStack.prototype.pop = function () {
  var size = this.inbox.array.length - 1;
  var counter = 0;
  var bufferQueue = new Queue();

  while (++counter <= size) {
    bufferQueue.enqueue(this.inbox.dequeue());
  }
  var popped = this.inbox.dequeue();
  this.inbox = bufferQueue;
  return popped;
};
var stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
