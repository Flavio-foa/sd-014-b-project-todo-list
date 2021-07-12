const botaoCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

window.onload = function() {
  listaTarefas.innerHTML = localStorage.getItem('list');
};

function addTarefaLista() {
  const tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  inputTextoTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', addTarefaLista);

function corDeFundoItemLista(event) {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = '';
    tarefas[i].removeAttribute('id');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.id = 'selected';
}
listaTarefas.addEventListener('click', corDeFundoItemLista);

function completedTasks(event) {
  if (event.target.classList == 'tarefa completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaTarefas.addEventListener('dblclick', completedTasks);

function deleteAll() {
  listaTarefas.innerHTML = '';
}
const buttonDeleteAll = document.getElementById('apaga-tudo');
buttonDeleteAll.addEventListener('click', deleteAll);

function deleteCompleted() {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = tarefas.length - 1; i >= 0; i -= 1) {
    if (tarefas[i].classList == 'tarefa completed') {
      listaTarefas.removeChild(tarefas[i]);
    }
  }
}
const deleteCompletedButton = document.getElementById('remover-finalizados');
deleteCompletedButton.addEventListener('click', deleteCompleted);

function saveTasks() {
  localStorage.setItem('list', listaTarefas.innerHTML);
}

const buttonSaveTasks = document.getElementById('salvar-tarefas');
buttonSaveTasks.addEventListener('click', saveTasks);

//
// let array = document.getElementsByClassName('tarefa');
// let selected = document.querySelector('.tarefa .selected');
function moveUp() {
  const array = document.querySelectorAll('.tarefa');
  const selected = document.querySelector('#selected');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === selected) {
      for (let iTrocado = index - 1; iTrocado >= 0; iTrocado -= 1) {
        for (let iTroca = index; iTroca >= 0; iTroca -= 1) {
          if (iTrocado < index) {
            const position = array[iTrocado].innerHTML;
            array[iTrocado].innerHTML = array[index].innerHTML;
            array[iTroca].innerHTML = position;
            array[iTrocado].id = 'selected';
            array[iTrocado].style.backgroundColor = 'rgb(128, 128, 128)';
            // array[iTrocado].className = 'tarefa completed';
            array[index].removeAttribute('id');
            array[index].style.backgroundColor = '';
            //array[index].classList.remove('completed');
            if (array[index].classList == 'tarefa completed') {
              array[index].classList.remove('completed');
              array[iTrocado].className = 'tarefa completed';
            }
            break;
          }
        }
        break;
      }
      console.log(array);
      break;
    }
  }
}
const buttonUp = document.getElementById('mover-cima');
buttonUp.addEventListener('click', moveUp);

// const array = document.querySelectorAll('li');
// const selected = document.querySelector('.selected');

function moveDown () {
  const array = document.querySelectorAll('.tarefa');
  const selected = document.querySelector('#selected');
  // console.log(selected);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === selected) {
      for (let iTrocado = index + 1; iTrocado < array.length; iTrocado += 1) {
        // console.log(array[iTrocado]);
        for (let iTroca = index; iTroca < array.length; iTroca += 1) {
          // console.log(array[iTroca]);
          if (iTrocado > index) {
            const position = array[iTrocado].innerHTML;
            array[iTrocado].innerHTML = array[index].innerHTML;
            array[iTroca].innerHTML = position;
            array[iTrocado].id = 'selected';
            array[iTrocado].style.backgroundColor = 'rgb(128, 128, 128)';
            // array[iTrocado].className = 'tarefa completed';
            array[index].removeAttribute('id');
            array[index].style.backgroundColor = '';
            // array[index].classList.remove('completed');
            if (array[index].classList == 'tarefa completed') {
              array[index].classList.remove('completed');
              array[iTrocado].className = 'tarefa completed';
            }
            break;
          }
        }
        break;
      }
      console.log(array);
      break;
    }
  }
}
const buttonDown = document.getElementById('mover-baixo');
buttonDown.addEventListener('click', moveDown);
//

function removeSelected() {
  const selectedTask = document.getElementById('selected');
  listaTarefas.removeChild(selectedTask);
}
const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);
