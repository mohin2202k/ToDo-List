const addTaskButton = document.querySelector('#addTask');
let taskCheck = document.querySelectorAll('.taskCheck');
let deleteBtn = document.querySelectorAll('.deleteBtn');
let taskList = document.querySelector('.taskList');

let tasks = [];

let addTask = function () {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    let newTask = prompt("Enter task");
    if (newTask === null || newTask === "") {
        alert("Please enter a task");
        return;
    }
    tasks.push(newTask);
    taskDiv.innerHTML = `<input type="checkbox" class="taskCheck">
                        <span class="taskText">${newTask}</span>  
                        <button class="deleteBtn">🗑️</button>`;
    taskList.append(taskDiv);
    let delbtn = taskDiv.querySelector('.deleteBtn');
    addELdel(delbtn);
}

let deleteTask = function (e) {
    let taskDiv = e.target.parentElement;
    taskList.removeChild(taskDiv);
}

addTaskButton.addEventListener('click', addTask);

function addELdel(btn) {
    btn.addEventListener('click', deleteTask);
}