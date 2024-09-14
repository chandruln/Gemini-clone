document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
})

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storedTasks){
        storedTasks.forEach((task) => tasks.push(task));
        updateTasksList();
        updateStats();
    }
})

let tasks = [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = () => {
    const taskinput = document.getElementById('taskInput');
    const text = taskinput.value.trim();
    if(text){
        tasks.push({text:text, completed:false});
        taskInput.value = "";
        updateTasksList();
        updateStats();
        saveTasks();
    }
}

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    saveTasks();
}

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();
}

const editTask = (index) => {
    const taskinput = document.getElementById('taskInput');
    taskinput.value = tasks[index].text
    deleteTask(index);
}

const updateStats = () => {
    const completedTasks = tasks.filter(task => task.completed).length
    const totalTasks = tasks.length;
    const progress = (completedTasks/totalTasks)*100
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`

    document.getElementById('numbers').innerText = `${completedTasks}/${totalTasks}`
    if(tasks.length && completedTasks === totalTasks) {
        finshPoper();
    }
}

const updateTasksList = () => {
    const taskList = document.getElementById('task-list')
    taskList.innerHTML = ''
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="taskItem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked": ""}/>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <i class="fa-solid fa-pen-to-square" onClick="editTask(${index})"></i>
                    <i class="fa-solid fa-trash" onClick="deleteTask(${index})"></i>
                </div>
            </div>
        `;
        listItem.addEventListener('change', () => toggleTaskComplete(index));
        taskList.append(listItem);
    })
}

const finshPoper = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
}