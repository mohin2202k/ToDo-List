const addTaskButton = document.querySelector('#addTask');
let taskCheck = document.querySelectorAll('.taskCheck');
let deleteBtn = document.querySelectorAll('.deleteBtn');
let taskList = document.querySelector('.taskList');
let comment = document.querySelector('.comment');
let taskInput = document.querySelector('#taskInput');

let tasks = {};
let taskNum = 0;

// task format:  x(taskNum): [taskText, isChecked]

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
                <span class="taskText" id="task${taskNum}">${taskInput.value}</span>
                <button class="editBtn"><img src="editPencil.svg" alt=""></button>  
                <button class="deleteBtn"><img src="garbageCan.svg" alt=""></button>
                `;
    taskList.append(taskDiv);
    tasks[taskNum] = [taskInput.value, false];
    let delbtn = taskDiv.querySelector('.deleteBtn');
    addELdel(delbtn);
    let editbtn = taskDiv.querySelector('.editBtn');
    addELedit(editbtn);
    let taskCheck = taskDiv.querySelector('.taskCheck');
    addELcheck(taskCheck);
    taskInput.value = "";
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let deleteTask = function (e) {
    let taskDiv = e.target.parentElement.parentElement;
    delete tasks[taskDiv.querySelector('.taskText').id.replace('task', '')];
    taskList.removeChild(taskDiv);
    taskNum--;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let editTask = function (e) {
    let taskDiv = e.currentTarget.parentElement;
    let taskText = taskDiv.querySelector('.taskText');
    let newTaskText = taskText ? prompt("Edit your task:", taskText.textContent) : null;
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskText.textContent = newTaskText;
        let taskId = taskText.id.replace('task', '');
        tasks[taskId][0] = newTaskText;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let checkFunction = function (e) {
    let taskDiv = e.target.parentElement;
    let taskText = taskDiv.querySelector('.taskText');
    let taskId = taskText.id.replace('task', '');
    tasks[taskId][1] = e.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let taskLoad = function () {
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        tasks = storedTasks;
        for (let key in tasks) {
            taskNum++;
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv');
            taskDiv.innerHTML = `
                <input type="checkbox" class="taskCheck" ${tasks[key][1] ? 'checked' : ''}>
                <span class="taskText" id="task${key}">${tasks[key][0]}</span>
                <button class="editBtn"><img src="editPencil.svg" alt=""></button>  
                <button class="deleteBtn"><img src="garbageCan.svg" alt=""></button>
                `;
            taskList.append(taskDiv);
            let delbtn = taskDiv.querySelector('.deleteBtn');
            addELdel(delbtn);
            let editbtn = taskDiv.querySelector('.editBtn');
            addELedit(editbtn);
            let taskCheck = taskDiv.querySelector('.taskCheck');
            addELcheck(taskCheck);
        }
    }
}
document.addEventListener('DOMContentLoaded', taskLoad);

addTaskButton.addEventListener('click', addTask);
function addELdel(btn) {
    btn.addEventListener('click', deleteTask);
}
function addELedit(btn) {
    btn.addEventListener('click', editTask);
}
function addELcheck(check) {
    check.addEventListener('click', checkFunction);
}
