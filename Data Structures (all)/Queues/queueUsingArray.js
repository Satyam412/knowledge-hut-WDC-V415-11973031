let myQueue = [];

function enqueue(value) {
  myQueue.push(value);
}

function dequeue() {
  let temp = myQueue.shift();
  return temp;
}

function print() {
  console.log("The queue currently contains : ");
  for (let index = 0; index < myQueue.length; index++) {
    console.log(myQueue[index]);
  }
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
print();
dequeue();
dequeue();
dequeue();
print();
