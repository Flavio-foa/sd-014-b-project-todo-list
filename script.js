function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input;
  task.style.backgroundColor = '';
  if (document.querySelector('#texto-tarefa').value !== '') {
    taskList.appendChild(task);
  }
  document.querySelector('#texto-tarefa').value = '';
}

function changeColor(event) {
  const evento = event;
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItem[index].style.backgroundColor = '';
    }
    evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

const list = document.querySelector('#lista-tarefas');
list.addEventListener('click', changeColor);

function finishTask(event) {
  const evento = event;
  evento.target.classList.toggle('completed');
}

list.addEventListener('dblclick', finishTask);
list.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);

function clearTasks() {
  const taskList = document.querySelector('#lista-tarefas');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

const completedTasks = document.querySelector('#lista-tarefas').childNodes;

// function removeCompletedTasks() {
//   const allTasks = document.querySelector('#lista-tarefas');
//   for (let index = 0; index < completedTasks.length; index += 1) {
//     if (completedTasks[index].className === 'completed') {
//       allTasks.removeChild(completedTasks[index]);
//     }
//   }
// }

function removeCompletedTasks() {
  const allTasks = document.querySelector('#lista-tarefas');
  let index = 0;
  const finalIndex = completedTasks.length;
  while (index < finalIndex) {
    if (completedTasks[index].className === 'completed') {
      allTasks.removeChild(completedTasks[index]);
    } else {
      index += 1;
    }
  }
}

const removeCompleted = document.getElementById('remover-finalizados');
for (let index = 0; index < completedTasks.length; index += 1) {
  removeCompleted.addEventListener('click', removeCompletedTasks);
}

createTask();
clearTasks();
