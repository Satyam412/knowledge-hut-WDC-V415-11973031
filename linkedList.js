class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addElement(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  removeElement() {
    let current = this.head;
    let tempNode = null;
    while (current.next != null) {
      tempNode = current;
      current = current.next;
    }
    let temp = current.value;
    tempNode.next = null;
    return temp;
  }

  printList() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let myList = new LinkedList();

myList.addElement(10);
myList.addElement(20);
myList.addElement(30);
myList.printList();
myList.removeElement();
myList.removeElement();
myList.printList();
