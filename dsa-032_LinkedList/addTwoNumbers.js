import { Node } from "./linkedlist";

/*
given  two non empty linked lists representing two non negative numbers 
The digits are stored in reverese order and each of their nodes contain a single digit 
add the two numbers and return it as linked list

*/

class AddTwoNumbers {
  constructor() {
    this.dummyNode = new Node(0);
  }

  solution(list1, list2) {
    let listOne = list1;
    let listTwo = list2;

    let tail = this.dummyNode;
    let carry = 0;
    while (listOne != null || listTwo != null) {
      const list1Num = listOne ? listOne.data : 0;
      const list2Num = listTwo ? listTwo.data : 0;
      const sum = carry + list1Num + list2Num;
      carry = parseFloat(sum / 10);
      tail = tail.next;
      if (list1Num) {
        list1Num = list1Num.next;
      }
      if (list2Num) {
        list2Num = list2Num.next;
      }
    }

    if (carry > 0) {
      tail.next = new Node(carry % 10);
    }
    return this.dummyNode.next;
  }

  solnArray() {
    const list = [];
    let current = this.dummyNode.next;
    while (currentNode) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export { AddTwoNumbers };
