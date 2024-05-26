document.addEventListener('DOMContentLoaded', (event) => {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', addTask);

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
