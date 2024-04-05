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
    render();
}

function render ()  {
    let resultHTML = '';
    for(let i=0; i<taskList.length; i++) {
        resultHTML += ` <div class ="task">
        <div>${taskList[i]}</div>
       <div>
            <button>Check</button>
            <button>Delete</button>
       </div>
    </div>`
    }
    document.getElementById('task-board').innerHTML = resultHTML;
}
