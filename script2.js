let todoList = [];

function add(){
    let task = document.getElementById("todo").value;
    todoList.push(task);
    console.log(todoList);
    showTasks();
}

function showTasks(){
    let ullist = document.getElementById('todolist');
    ullist.innerHTML = "";
    let bodyList = "";

    for(let i=0; i<todoList.length; i++){
        bodyList += `<li>${todoList[i]}</li>`;
    }

    ullist.innerHTML = bodyList;
}