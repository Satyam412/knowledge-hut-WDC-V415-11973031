class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  addElement(value) {
    let newNode = new Node(value);
    if (this.top == null) {
      this.top = newNode;
    } else {
      let current = this.top;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  removeElement() {
    let current = this.top;
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
    let current = this.top;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let myList = new Stack();

myList.addElement(10);
myList.addElement(20);
myList.addElement(30);
myList.printList();
myList.removeElement();
myList.removeElement();
myList.printList();
