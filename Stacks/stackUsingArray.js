let myStack = [];

function pushItem(value) {
  myStack.push(value);
}

function removeItem() {
  let item = myStack.pop();
  return item;
}

function print() {
  console.log("The stack currently contains : ");
  for (let index = myStack.length - 1; index > -1; index--) {
    console.log(myStack[index]);
  }
}

pushItem(100);
pushItem(200);
pushItem(300);
pushItem(400);
print();
removeItem();
removeItem();
print();
