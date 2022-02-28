/* // this is an example for singly linked list :
=A singly linked list holds list of values.
=the links in a linked list do not have any indexes
=we need not have to determine it size 
=it grows and shrinks as every change made into it

Methods
=size
=head
=addtoLast
=addtoFirst
=addAt
=removeFromFirst
=removeFromLast
=removeAt
=remove
=indexOf
=isEmpty
=elementAt
=get


*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  // length
  size() {
    return this.length;
  }

  // return head of linked list
  head() {
    return this.headNode ? this.headNode : null;
  }

  //   add a node at the last of linked list
  addAtLast(item) {
    const node = new Node(item);

    if (this.headNode === null) {
      this.headNode = node;
    } else {
      let currentNode = node;

      // loop till there is a node present in the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.length++;
  }

  // add to front
  addAtFirst(item) {
    const node = new Node(item);
    node.next = this.headNode;
    this.headNode = node;
    this.length++;
  }

  // remove from the first
  removeFromFirst() {
    if (this.length > 0) {
      this.headNode = this.headNode.next;
      this.length--;
    }
  }

  //   removee from last of the linkedList
  removeFromLast() {
    if (this.length === 1) {
      this.headNode = null;
      this.length--;
    } else if (this.length > 1) {
      let index = 0;
      let currentNode = this.headNode;
      while (index !== this.length - 2) {
        index++;
        currentNode = currentNode.next;
      }
      currentNode = currentNode.next;
      this.length--;
    }
  }

  //   removes the node with the value as param
  remove(item) {
    let currentNode = this.headNode;

    // check if the head elem is the iteem to remove
    if (currentNode.data === item) {
      this.headNode = currentNode.next;
    } else {
      // iterate over and check the eveery elem
      while (currentNode && currentNode.next) {
        if (currentNode.next.data === item) {
          currentNode.next = currentNode.next.next;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    this.length--;
  }

  isEmpty() {
    return (this.length = 0);
  }

  //   return the index of thee elem passed
  indexOf(item) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode) {
      // check if the node iss the elem we are searching for
      if (currentNode.data === item) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  //   return the elem at the index passed as parameter
  elementAtIndex(index) {
    if (index >= this.length || index < 0) {
      throw new RangeError("Out of range");
    }

    let currentNode = this.headNode;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  addAtIndex(index, item) {
    const node = new Node(item);

    if (index > this.length || index < 0) {
      throw new RangeError("out of range");
    }

    let currentNode = this.headNode;
    let currentIndex = 0;

    //   check if index is the start of list
    if (index === 0) {
      node.next = currentNode;
      this.headNode = node;
    } else {
      while (currentIndex !== index - 1) {
        currentIndex++;
        currentNode = currentNode.next;
      }

      // adding to specified place
      const temp = currentNode.next;
      currentNode.next = node;
      node.next = temp;
    }
    this.length++;
  }

  //   remove at index
  removeAtIndex(index) {
    let currentNode = this.headNode;
    let currentIndex = 0;

    // check if index is present in list or not
    if (index < 0 || index >= this.length) {
      throw new RangeError("out of range index");
    }

    if (index === 0) {
      this.headNode = currentNode.next;
    } else {
      while (currentIndex !== index - 1) {
        currentIndex++;
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
    this.length--;
  }

  //   to get the linked list items
  getAllListValue() {
    const list = [];
    let currentNode = this.headNode;
    while (currentNode) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return list;
  }

  //   log the linked list
  log() {
    console.log(JSON.stringify(this.headNode, null, 2));
  }
}

export { Node, LinkedList };
