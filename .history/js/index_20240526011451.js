//task 3 part 2

const BACKEND_ROOT_URL = 'http://localhost:3001';

const list = document.querySelector('ul');
const input = document.querySelector('input');

input.disabled = true;
// end task 3 part 2
document.addEventListener('DOMContentLoaded', (event) => {
  const taskInput = document.querySelector('#taskInput');
  const addTaskButton = document.querySelector('#addTaskButton');
  const taskList = document.querySelector('#taskList');

  addTaskButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const taskItem = document.createElement('li');
          taskItem.className = 'list-group-item';
          taskItem.textContent = taskText;
          taskList.appendChild(taskItem);
          taskInput.value = '';
      }
  }
});
// Task 3


const renderTask = (task) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'list-group-item');
  li.innerHTML = task;
  list.append(li);
};

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const task = input.value.trim();
    if (task !== '') {
      saveTask(task).then((json) => {
        renderTask(task);
        input.value = '';
      });
    }
  }
});

