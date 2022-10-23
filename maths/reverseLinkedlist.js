class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedListReverse {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      if (!this.head) {
        this.head = new Node(data, this.head);
      } else {
        this.next = this.head;
        this.head = new Node(data, this.next);
      }
    }
  
    getFirst() {
      return this.head;
    }
  
    insertLast(data) {
      let last = this.getLast();
      if (!last) {
        this.head = new Node(data);
      } else {
        last.next = new Node(data);
      }
    }
  
   reverse(head) {
  
      let prev = null;
      let curr = head;
      let next = curr.next;
  
      while(curr) {
          next = curr.next;
          curr.next = prev;
          prev = curr 
          curr = next
      }
      this.head = prev;
      return this.head;
  
    }
  
  
  }