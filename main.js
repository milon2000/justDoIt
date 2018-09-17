var list = document.querySelector('ul');
var input = document.querySelector('input');
var addBtn = document.querySelector('button');

addBtn.addEventListener('click', function() {
  var newTask = input.value;
  input.value = "";

  var taskItem = document.createElement('li');
  var taskText = document.createElement('span');
  var dltBtn = document.createElement('button');

  taskItem.appendChild(taskText);
  taskItem.textContent = newTask;
  taskItem.appendChild(dltBtn);

  dltBtn.textContent = "Done";
  list.appendChild(taskItem);

  dltBtn.addEventListener('click', function() {
    list.removeChild(taskItem);
  })
  input.focus();
})
