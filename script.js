const addTaskButton = document.querySelector('#addTask');
let taskCheck = document.querySelectorAll('.taskCheck');
let deleteBtn = document.querySelectorAll('.deleteBtn');
let taskList = document.querySelector('.taskList');
let comment = document.querySelector('.comment');
let taskInput = document.querySelector('#taskInput');

let tasks = [];
let taskNum = 0;

let addTask = function () {
    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskNum++;
    taskDiv.innerHTML = `
                <input type="checkbox" class="taskCheck">
                <span class="taskText">${taskInput.value}</span>
                <button class="editBtn"><img src="editPencil.svg" alt=""></button>  
                <button class="deleteBtn"><img src="garbageCan.svg" alt=""></button>
                `;
    taskList.append(taskDiv);
    let delbtn = taskDiv.querySelector('.deleteBtn');
    addELdel(delbtn);
    taskInput.value = "";
}

let deleteTask = function (e) {
    let taskDiv = e.target.parentElement.parentElement;
    taskList.removeChild(taskDiv);
    taskNum--;
}


addTaskButton.addEventListener('click', addTask);

function addELdel(btn) {
    btn.addEventListener('click', deleteTask);
}
function addELcheck(btn) {
    btn.addEventListener('click', disableInput);
}