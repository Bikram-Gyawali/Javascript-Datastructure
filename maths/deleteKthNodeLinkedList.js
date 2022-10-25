class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedListDeleteKthNode {
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
  
    getLast() {
      let node = this.head;
      if (!node) {
        return null;
      }
      while (node.next) {
        node = node.next;
      }
      return node;
    }
  
  
  
    insertLast(data) {
      let last = this.getLast();
      if (!last) {
        this.head = new Node(data);
      } else {
        last.next = new Node(data);
      }
    }
  
    deleteKthNode(int) {
      if(!this.head) {
        return;
      }
      let tmp = this.head;
  
      if(int === 0) {
        this.head = tmp.next;
        tmp = null;
        return;
      }
  
      let counter = 0;
      while(counter !== int - 1 && tmp) {
        if(!tmp) {
          return;
        }
        if(!tmp.next) {
          return;
        }
        counter++;
        tmp = tmp.next;
      }
  
      tmp.next = tmp.next.next;
    }
  
  }