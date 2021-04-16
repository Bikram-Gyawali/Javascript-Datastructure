function DoublyLinkdListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkdList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkdList.prototype.isEmpty = () => {
  return this.size == 0;
};

DoublyLinkdList.prototype.addAtFront = (value) => {
  if (this.head == null) {
    this.head = new DoublyLinkdList(value);
    this.tail = this.head;
  } else {
    var temp = new DoublyLinkdListNode(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
};

var dll1 = new DoublyLinkdList();
dll1.addAtFront(10); //ddl1 structure : tail:10 head:10
dll1.addAtFront(30); //ddl1 structure : tail:10 head:12
dll1.addAtFront(14); //ddl1 structure : tail:10 head:20

// insertion at tail
DoublyLinkdList.prototype.insertOnTail = function (value) {
  if (this.tail === null) {
    this.tail = new DoublyLinkdListNode(value);
    this.head = this.tail;
  } else {
    var temp = new DoublyLinkdListNode(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
};

var dll1 = new DoublyLinkdLis();
dll1.addAtFront(10); // tail:10 head :10
dll1.addAtFront(12); //tail:10 head:12
dll1.insertOnTail(30); //tail:30 head:20
