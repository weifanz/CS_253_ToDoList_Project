/* FILE: main.js
* --------------
*/

document.addEventListener("DOMContentLoaded", function() {

  // Buttons from html file
  const task_btn = document.getElementById('add_task_btn');
  const add_day = document.getElementById('add_day');
  const add_task = document.getElementById('add_task');
  const deleteBtn = document.getElementById('delete_task_btn');
    
  task_btn.addEventListener("click", function(event) {
  /*
  * task_btn.addEventListener is a function that listens for a click and runs the function
  * The function will take in the input and store it in the correct list
  */
  var content = add_task.value; // Getting user input

  if (content != "") {
    var parent = document.getElementById(add_day.value);
            
    var listTask = document.createElement('li'); 
    listTask.textContent = content;
            
    parent.appendChild(listTask);
    createCheckbox();
    } 
    
    else {
      alert("Please add your task.");
    }

    add_task.value = '';
    });

  deleteBtn.addEventListener("click", function(event) {
    /*
    this function will act as the delete function which will allow the user to remove a specified task
    */
    var contentToDelete = add_task.value;
    var dayToDeleteFrom = add_day.value;
    var listItems = document.getElementById(dayToDeleteFrom).getElementsByTagName('li');

    for (var i = 0; i < listItems.length; i++){
      if (listItems[i].textContent === contentToDelete){
        listItems[i].remove();
        break; // exit the loop once the task is deleted
      }
    }
  });

})