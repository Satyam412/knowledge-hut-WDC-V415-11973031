let allItems = [];

let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

let counter = 0;

function addTask() {
  let item = {
    id: counter,
    content: document.getElementById("userTask").value,
    completed: false,
  };
  counter++;
  allItems.push(item);
  document.getElementById("userTask").value = "";
  document.getElementById("allTasks").innerHTML = displayTasks(allItems);
}

function displayTasks(allTasks) {
  let output = ``;
  allTasks.forEach((task) => {
    let tempTask = task.completed
      ? `<li class="complete">
      <p>${task.content}</p>
      <div>
        <i class="bi bi-check-square-fill" onclick="markAsComplete()" id="complete_${task.id}" value="${task.id}"></i>
        <i class="bi bi-trash3-fill" onclick="deleteItem()" id="delete_${task.id}" value="${task.id}"></i>
      </div>
  </li>`
      : `<li>
        <p>${task.content}</p>
        <div>
          <i class="bi bi-check-square-fill" onclick="markAsComplete()" id="complete_${task.id}" value="${task.id}"></i>
          <i class="bi bi-trash3-fill" onclick="deleteItem()" id="delete_${task.id}" value="${task.id}"></i>
        </div>
    </li>`;
    output += tempTask;
  });
  return output;
}

function markAsComplete() {
  let currentTask = event.target.getAttribute("value");
  allItems[currentTask].completed = true;
  document.getElementById("allTasks").innerHTML = displayTasks(allItems);
}

function deleteItem() {
  let currentTask = event.target.getAttribute("value");
  allItems.splice(currentTask, 1);
  document.getElementById("allTasks").innerHTML = displayTasks(allItems);
}
