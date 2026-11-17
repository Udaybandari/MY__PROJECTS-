const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskcount = document.getElementById("totalTasks");
const completedTasks=document.getElementById("completedTasks");
const pendingTasks=document.getElementById("pendingTasks");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");    
        return;
    }

    const newTask = {
        id: Date.now(),
        title: taskName,
        completed: false
    };

    tasks.push(newTask);
      saveTasks();
    displayTasks();

    taskInput.value = "";
});
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task) {

        const taskItem = document.createElement("div");

        taskItem.classList.add("task-item");

        const taskName = document.createElement("p");

        taskName.textContent = task.title;

        taskItem.append(taskName);
        const statusIcon = document.createElement("button");
         const RemoveIcon = document.createElement("button");
        statusIcon.classList.add("status-item");
      RemoveIcon.innerText = "🗑️";

        statusIcon.textContent = task.completed ? "✅" : "☐";
        
 statusIcon.addEventListener("click", function () {

            task.completed = !task.completed;
            saveTasks();
            displayTasks();

       
          
        });
         RemoveIcon.addEventListener("click", function () {

                tasks = tasks.filter(function (item) {
        return item.id !== task.id;
    });
  saveTasks();
            displayTasks();
          

        });

      taskItem.append(statusIcon);
       taskItem.append(RemoveIcon);
taskList.append(taskItem);
taskcount.innerText = tasks.length;

completedTasks.innerText = tasks.filter(task => task.completed).length;

pendingTasks.innerText = tasks.filter(task => !task.completed).length;

    });

}
taskcount.innerText=tasks.length;
displayTasks();    