const addTaskButton = document.querySelector('#addTask');
let taskCheck = document.querySelectorAll('.taskCheck');
let deleteBtn = document.querySelectorAll('.deleteBtn');
let taskList = document.querySelector('.taskList');
let comment = document.querySelector('.comment');

let tasks = [];
let taskNum = 0;

let addTask = function () {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskNum++;
    taskDiv.innerHTML = `
                <input type="checkbox" class="taskCheck">
                <input type="text" class="taskText" placeholder="Enter a task">
                <button class="deleteBtn"><img src="garbageCan.svg" alt=""></button>`;
    taskList.append(taskDiv);
    let targetTask = taskDiv.querySelector('.taskText').focus();
    let delbtn = taskDiv.querySelector('.deleteBtn');
    addELdel(delbtn);
    let checkbtn = taskDiv.querySelector('.taskCheck');
    addELcheck(checkbtn);
    if (taskNum === 0) {
        comment.style.display = "block";
    } else {
        comment.style.display = "none";
    }
}

let deleteTask = function (e) {
    let taskDiv = e.target.parentElement.parentElement;
    taskList.removeChild(taskDiv);
    taskNum--;
    if (taskNum === 0) {
        comment.style.display = "block";
    } else {
        comment.style.display = "none";
    }
}

let disableInput = function (e) {
    let taskText = e.target.parentElement.querySelector('.taskText');
    if (e.target.checked) {
        taskText.setAttribute('disabled', 'disabled');
    } else {
        taskText.removeAttribute('disabled');
    }
}

addTaskButton.addEventListener('click', addTask);

function addELdel(btn) {
    btn.addEventListener('click', deleteTask);
}
function addELcheck(btn) {
    btn.addEventListener('click', disableInput);
}