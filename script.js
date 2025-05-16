const addTaskButton = document.querySelector('#addTask');
let taskCheck = document.querySelectorAll('.taskCheck');
let deleteBtn = document.querySelectorAll('.deleteBtn');
let taskList = document.querySelector('.taskList');
let comment = document.querySelector('.comment');

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
                        <span class="taskText">${newTask.trim()}</span>  
                        <button class="deleteBtn"><img src="garbageCan.svg" alt=""></button>`;
    taskList.append(taskDiv);
    let delbtn = taskDiv.querySelector('.deleteBtn');
    addELdel(delbtn);
    if (tasks.length === 0) {
        comment.hidden = false;
    } else {
        comment.hidden = true;
    }
}

let deleteTask = function (e) {
    let taskDiv = e.target.parentElement.parentElement;
    taskList.removeChild(taskDiv);
    tasks.pop(e.target.parentElement.previousElementSibling.innerText);
    if (tasks.length === 0) {
        comment.hidden = false;
    } else {
        comment.hidden = true;
    }
}

addTaskButton.addEventListener('click', addTask);

function addELdel(btn) {
    btn.addEventListener('click', deleteTask);
}