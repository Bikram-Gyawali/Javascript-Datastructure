/*
Queue is a data structure that allows you to add an element to the end of a list and remove at the front. A queue follows a "First in First Out" pattern
*/

class Queue {
  constructor() {
    this.queue = [];
  }

  // add a new value to the queue
  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.empty()) {
      throw new Error("Queue is Empty");
    }
    return this.queue.shift(); //remove the item at first position
  }

  length() {
    return this.queue.length;
  }

  peek() {
    if (this.empty()) {
      throw new Error("Queue is Empty");
    }
    return this.queue[0];
  }

  display(out = (value) => console.log(value)) {
    out(this.queue);
  }

  empty() {
    return this.queue.length === 0;
  }
}

export { Queue };
