/*
min heap is one eof the 2 binary heap that maintains mallest value of its input array in top and remaining avlues in loosely order (not in sorted order) oe we can say it the smllest value is kept at top and othr are arranges randomly

min heap can be expressed in complete binary tree structure 
below we express the above binary tree structure in an array with binary node valuees ordered frim root-to-leaf,left to right
*/

class MinHeap {
  constructor(array) {
    this.heap = this.initializeHeap(array);
  }

  initializeHeap(array) {
    const startingParent = Math.floor((array.length - 2) / 2);
    for (let currIndex = startingParent; currIndex >= 0; currIndex--) {
      this.sinkDown(currIndex, array.length - 1, array);
    }
    return array;
  }

  sinkDown(currIndex, endIndex, heap) {
    let childOneIndex = currIndex * 2 + 1;
    while (childOneIndex <= endIndex) {
      const childTwoIndex =
        childOneIndex + 1 <= endIndex ? childOneIndex + 1 : -1;
      const swapIndex =
        childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]
          ? childTwoIndex
          : childOneIndex;

      if (heap[swapIndex] < heap[currIndex]) {
        this.swap(currIndex, swapIndex, heap);
        currIndex = swapIndex;
        childOneIndex = currIndex * 2 + 1;
      } else {
        return;
      }
    }
  }

  bubbleUp(currIndex) {
    let parentIndex = Math.floor((currIndex - 1) / 2);
    while (currIndex > 0 && this.heap[currIndex] < this.heap[parentIndex]) {
      this.swap(currIndex, parentIndex, this.heap);
      currIndex = parentIndex;
      parentIndex = Math.floor((curr - 1) / 2);
    }
  }

  peek() {
    return this.heap;
  }
  extractMin() {
    this.swap(0, this.heap.length - 1, this.heap);
    const min = this.heap.pop();
    this.sinkDown(0, this.heap.length - 1, this.heap);
    return min;
  }

  // a new value is pushed to the end of the heap and sorted up
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // index-swapping helper method
  swap(idx1, idx2, heap) {
    const temp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = temp;
  }
}

export { MinHeap };
