document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.className = "task-item";
            li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
            li.querySelector(".delete-btn").addEventListener("click", () => {
                taskList.removeChild(li);
            });

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});
