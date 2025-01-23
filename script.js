//Global Variable and will create an empty array with name task
let tasks = []
i = 0
function addTask(){
 const input = document.getElementById('taskInput')
 const task = input.value.trim()
 console.log(task)
 if(task !==''){
    tasks.push(task)
    console.log(tasks)
    input.value = ''
    displayTask()
}
}

function editTask(index){
    const newtask=prompt("Edit Task")
    console.log(newtask)
    // tasks.splice(index, 1, newtask)
    tasks[index]=newtask.trim()
    displayTask()
}

function removeTask(index){
    tasks.splice(index, 1)
    displayTask()
}


function displayTask(){
    const taskList = document.getElementById('taskList')
    let html = ''
    for(let i = 0; i < tasks.length; i++){
        html += `
            <div class="task-item">
                <span class="task-text">${i+1}. ${tasks[i]}</span>
            
                <div class="button-group">
                <button class="edit-btn" onclick="editTask(${i})">Edit</button>
                <button class="delete-btn" onclick="removeTask(${i})">Delete </button>

                </div>
            </div>
        `;
    }
    taskList.innerHTML = html;

}