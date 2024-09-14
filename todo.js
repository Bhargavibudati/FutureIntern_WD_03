let pendingTasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const labelInput = document.getElementById("labelInput").value;
    const dateInput = document.getElementById("dateInput").value;

    if (taskInput === "" || dateInput === "") {
        alert("Please fill in all fields!");
        return;
    }

    const newTask = {
        activity: taskInput,
        label: labelInput,
        dueDate: dateInput
    };

    pendingTasks.push(newTask);
    renderPendingTasks();
    
    // Clear input fields
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
}

function renderPendingTasks() {
    const pendingTasksTableBody = document.querySelector("#pendingTasks tbody");
    pendingTasksTableBody.innerHTML = ""; // Clear existing content

    pendingTasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.activity}</td>
            <td><span class="label">${task.label}</span></td>
            <td>${task.dueDate}</td>
            <td class="action-btns">
                <button onclick="completeTask(${index})">Complete</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </td>
        `;

        pendingTasksTableBody.appendChild(row);
    });
}

function renderCompletedTasks() {
    const completedTasksTableBody = document.querySelector("#completedTasks tbody");
    completedTasksTableBody.innerHTML = ""; // Clear existing content

    completedTasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.activity}</td>
            <td><span class="label">${task.label}</span></td>
            <td>${task.dueDate}</td>
            <td class="action-btns">
                <button class="delete" onclick="deleteCompletedTask(${index})">Delete</button>
            </td>
        `;

        completedTasksTableBody.appendChild(row);
    });
}

function completeTask(index) {
    const task = pendingTasks.splice(index, 1)[0]; // Remove from pending and add to completed
    completedTasks.push(task);
    renderPendingTasks();
    renderCompletedTasks();
}

function deleteTask(index) {
    pendingTasks.splice(index, 1); // Remove task
    renderPendingTasks();
}

function deleteCompletedTask(index) {
    completedTasks.splice(index, 1); // Remove task
    renderCompletedTasks();
}
