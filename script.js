const clickButton = document.querySelector('#criar-tarefa')
clickButton.addEventListener('click', createNewTask);

function createNewTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const createTask = document.createElement('li');
  createTask.innerText = inputTask.value;
  createTask.addEventListener('click', listBackgroundColor);
  taskList.appendChild(createTask);
  inputTask.value = '';
}

function listBackgroundColor(Event) {
  const selectedList = document.querySelectorAll('li');
  const color = 'rgb(128, 128, 128)';
  for (let index = 0; index < selectedList.length; index += 1) {
    if (selectedList[index].style.backgroundColor === color) {
      selectedList[index].style.backgroundColor = '';
    } else {
      Event.target.style.backgroundColor = color;
    }
  }
}
