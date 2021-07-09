window.onload = function () {
  const button = document.getElementById('criar-tarefa');
  const inputTarefa = document.getElementById('texto-tarefa');
  const listTarefa = document.getElementById('lista-tarefas');

  button.addEventListener('click', function () {
    const listItens = document.createElement('li');
    listTarefa.appendChild(listItens);
    listItens.innerHTML = inputTarefa.value;
    inputTarefa.value = '';

    listItens.addEventListener('click', function () {
      if (listItens.classList.contains('checked')) { // Utilizei o Contains por experiência passada com mesmo tipo de projeto.
        listItens.classList.remove('checked');
      } else {
        listItens.classList.add('checked');
      }
    });
  });
};
