/* FILE: main.js
* --------------
*/

document.addEventListener("DOMContentLoaded", function() {

  // buttons from html file
  const addTaskBtn = document.getElementById('add_task_btn');
  const addDay = document.getElementById('add_day');
  const addTask = document.getElementById('add_task');

  const deleteBtn = document.getElementById('delete_task_btn');
  const deleteDay = document.getElementById('delete_day');
  const chooseTask = document.getElementById('choose_task');

  let tasks = [];

  class Task {
    constructor(day, taskContent) {
      this.day = day;
      this.taskContent = taskContent;
    }
  }

  // UpdateDeleteDropdown Function
  function updateDeleteDropdown() {
    chooseTask.innerHTML = ""; // Clear existing options
    var selectedDay = deleteDay.value;
    var dayTasks = tasks.filter(task => task.day === selectedDay);
    dayTasks.forEach(task => {
        var option = document.createElement('option');
        option.value = task.taskContent;
        option.textContent = task.taskContent;
        chooseTask.appendChild(option);
    });
  }
    
  addTaskBtn.addEventListener("click", function(event) {
  /*
  * task_btn.addEventListener is a function that listens for a click and runs the function
  * The function will take in the input and store it in the correct list
  */
  var content = addTask.value; // Getting user input
  let day = addDay.value;

  // If a task with the same name already exists in that day, display warning.
  if (tasks.some(task => task.day === day && task.taskContent === content)) {
    alert("You already have this task on the same day. Please change the name of your task.");
  }
  else if (content != "") {
    let task = new Task(day, content);
    tasks.push(task)

    var parent = document.getElementById(day);
    var listTask = document.createElement('li'); 

    listTask.textContent = content;
    parent.appendChild(listTask);
    addTask.value = '';

    updateDeleteDropdown();
  } 
  else {
    alert("Please add your task.");
  }
    });

    // Delete Button Event Listener
    deleteBtn.addEventListener("click", function(event) {
      var contentToDelete = chooseTask.value;
      var dayToDeleteFrom = deleteDay.value;
      var listItems = document.getElementById(dayToDeleteFrom).getElementsByTagName('li');
      for (var i = 0; i < listItems.length; i++) {
          if (listItems[i].textContent === contentToDelete) {
              listItems[i].remove();
              // Update the tasks array to remove the deleted task
              tasks = tasks.filter(task => !(task.day === dayToDeleteFrom && task.taskContent === contentToDelete));
              break;
          }
      }
      updateDeleteDropdown();
    });
    

    deleteDay.addEventListener("change", function(event) {
      updateDeleteDropdown();
    });
    
});