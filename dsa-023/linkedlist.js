// A LINKED LIST IS A DATA STRUCTURE IN WHICH EACH NODE POINTS TO ANOTHER NODE . A LINKED LISST IS A DYNAMIC DATA STRUCTURE WHICH CAN ALLOCATE OR DELLOCATE MEMORY AT RUNTIME .

// MOSTLY USED LINKED LIST CONCEPT ARE :

// 1 SINGLY LINKED LIST:-> this linked list has refrence to next single node. its properties are data and next.

// 2 DOUBLY LINKED LIST:->A doubly linked list can be thought of as a bidirectional singly linked list. Each node in the doubly linked list has both a next pointer and a prev pointer.

function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};
var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(5);
sll1.insert(10);
console.log(sll1);

// deletetion of node in linked list
SinglyLinkedList.prototype.remove = function (value) {
  var currentHead = this.head;
  if (currentHead.data == vlaue) {
    // shift the head
    this.head = currentHead.next;
    this.size--;
  } else {
    var prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        prev.next = currentHead.next;
        prev = next;
        currentHead = currentHead.next;
      }
    }
    // IF WASNT FOUND IN THE MIDDLE OR HEAD MUST BE IN TAIL
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
};

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(2);
sll1.insert(3);
sll1.insert(4);
sll1.insert(10);

// deleetion at head
SinglyLinkedList.prototype.deleteHead = () => {
  var toReturn = null;
  if (this.head != null) {
    toReturn = this.head.data;
  }
  if (this.tail === this.head) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  this.size--;
  return toReturn;
};

var sll1 = new SinglyLinkedList();
sll1.insert(10);
sll1.insert(30);
sll1.insert(20);
sll1.deleteHead();

SinglyLinkedList.prototype.find = function (value) {
  var currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};
