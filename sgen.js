document.addEventListener("DOMContentLoaded", function() {
    var completedTasks = document.getElementById("completedTasks");
    var undoneTasks = document.getElementById("undoneTasks");
  
    // Add click event listener to undone tasks
    undoneTasks.addEventListener("click", function(event) {
      var task = event.target;
      if (task.tagName === "LI") {
        // Move task to completed tasks list
        completedTasks.appendChild(task);
      }
    });
  });
  