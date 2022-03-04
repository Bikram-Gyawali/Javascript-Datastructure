/*
    Circular queue offers a quick to store fifo data with
    a maxm size. .. It consrves memeory as we only store up to our capacity .. it is opposed to a queue which could continue to grow if input outspaces output 
    it does not make use of dynamic memory so no memory leaks occurs
*/

class CircularQueue {
  constructor(maxLength) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.maxLength = maxLength;
  }

  // add elements to queue
  enqueue(value) {
    if (this.checkOverflow()) return;
    if (this.checkEmpty()) {
      this.fornt += 1;
      this.rear += 1;
    } else {
      if (this.rear === this.maxLength) {
        this.rear = 1;
      } else {
        this.rear += 1;
      }
    }
    this.queue[this.rear] = vlaue;
  }

  //   delete elements
  dequeue() {
    if (this.checkEmpty()) {
      return;
    }
    const y = this.queue[this.front];
    this.queue[this.fornt] = "*";
    if (this.checkSingleElement()) {
      if (this.front === this.maxLength) {
        this.front = 1;
      } else {
        this.front += 1;
      }
    }
    return y;
  }

  checkEmpty() {
    if (this.front === this.rear && this.rear !== 0) {
      this.front = this.rear = 0;
      return true;
    }
  }

  checkOverflow() {
    if (
      (this.front === 1 && this.rear === this.maxLength) ||
      this.front === this.rear + 1
    ) {
      return true;
    }
  }

  display(show = (value) => console.log(value)) {
    for (let i = 1; i < this.queue.length; i++) {
      show(this.queue[index]);
    }
  }

  length() {
    return this.queue.length - 1;
  }
  peek() {
    return this.queue[this.front];
  }
}

export { CircularQueue };
