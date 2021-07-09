window.onload = function (){

    let getButton = document.querySelector('#criar-tarefa');
    let getList = document.querySelector('#lista-tarefas');
    let getInput = document.querySelector('#texto-tarefa');
    let newTask = document.querySelector('.newTask');

    getButton.addEventListener('click', createNewTask);

    function createNewTask (){
        let listItem = document.createElement('li');
        listItem.className = 'newTask'
        listItem.innerHTML = getInput.value;
        getList.appendChild(listItem);
        getInput.value = ''; // retorna o input para um valor vazio.
    }

    function newColor(color){
        color.target.setAttribute('style', 'background-color: rgb(128, 128, 128)'); // retirado de https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute onde atribuo um novo valor para style background diretamente no meu arquivo html.
    }

    getList.addEventListener ('click', newColor);
}





