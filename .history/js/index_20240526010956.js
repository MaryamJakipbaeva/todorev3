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
const renderTask = (task) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'list-group-item');
  li.innerHTML = task;
  list.append(li);
};

