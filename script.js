let getButton = document.getElementById("criar-tarefa");
let getOl = document.getElementById("lista-tarefas");
let getInput = document.getElementById("texto-tarefa");



function addTask() {
    let newLi = document.createElement("li");
    newLi.innerHTML = getInput.value;
    newLi.classList.add("itens-lista");
    getOl.appendChild(newLi);
    newLi.addEventListener("click", changeBkg);
    getInput.value = "";
    
}
getButton.addEventListener("click", addTask);

function changeBkg(event){
    let getSelected = document.querySelector(".selected");
    if(getSelected === null){
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
        event.target.classList.add("selected"); 
    } else  {
        console.log(getSelected);
        getSelected.style.backgroundColor = "";
        getSelected.classList.remove("selected");
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
        event.target.classList.add("selected");
    }
}



 







