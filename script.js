const inputTarefa = document.getElementById('texto-tarefa');
const botaoAdicionarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoLimparLista = document.getElementById('apaga-tudo');

function tarefaDigitada(event) {
  tarefaParaInserir = event.target.value;
}

function apagarTextoInput() {
  inputTarefa.value = '';
}

function changeColor(event) {
  let itensListaTarefas = listaTarefas.children;
  for (let index = 0; index < itensListaTarefas.length; index += 1) {
    let corFundoItem = window.getComputedStyle(itensListaTarefas[index]).getPropertyValue('background-color');
    if (corFundoItem === 'rgb(128, 128, 128)') {
      itensListaTarefas[index].style.setProperty('background-color', '');
    }
  }
  event.target.style.setProperty('background-color', 'rgb(128, 128, 128)');
}

function tarefaCumprida (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed')
  } else {
    event.target.classList.add('completed');
  }
}

function aplicarCSSLista() {
  let itensListaTarefas = listaTarefas.children;
  for (let index = 0; index < itensListaTarefas.length; index += 1) {
    itensListaTarefas[index].addEventListener('click', changeColor);
    itensListaTarefas[index].addEventListener('dblclick', tarefaCumprida);
  }
}

function adicionarTarefa() {
  if (tarefaParaInserir === '') {
    return;
  }
  const itemListaTarefas = document.createElement('li');
  itemListaTarefas.innerText = tarefaParaInserir;
  listaTarefas.appendChild(itemListaTarefas);
  apagarTextoInput();
  aplicarCSSLista();
}

function limparLista () {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

inputTarefa.addEventListener('keyup', tarefaDigitada);
botaoAdicionarTarefa.addEventListener('click', adicionarTarefa);
botaoLimparLista.addEventListener('click', limparLista);

let tarefaParaInserir = '';
