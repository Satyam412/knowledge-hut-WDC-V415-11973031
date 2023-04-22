class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  addElement(value) {
    let newNode = new Node(value);
    if (this.front == null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      let current = this.front;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  removeElement() {
    let current = this.front;
    this.front = this.front.next;
    return current.value;
  }

  printList() {
    console.log("The queue contains : ");
    let current = this.front;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let myList = new Queue();

myList.addElement(10);
myList.addElement(20);
myList.addElement(30);
myList.printList();
myList.removeElement();
myList.removeElement();
myList.printList();
