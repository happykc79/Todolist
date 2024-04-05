// User inputs
// Add a task by pressing +
// Delete when delete button is clicked
// Cross if check button is clicked
// when Progress end tab is clicked, under bar also moves
// Under done tab, done jobs are shown, Under undone tab, undone jobs are shown
// All tab is clicked, all jobs are shown

let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let taskList =  [];

addButton.addEventListener('click', addTask);

function addTask() {
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    console.log(taskList);
}

function render ()  {
    let resultHTML = '';
    document.getElementById('task-board').innerHTML = resultHTML;
}
