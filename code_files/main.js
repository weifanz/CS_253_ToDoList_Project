/* FILE: main.js
* --------------
*/

document.addEventListener("DOMContentLoaded", function() {

  // buttons from html file
  const task_btn = document.getElementById('add_task_btn');
  const add_day = document.getElementById('add_day');
  const add_task = document.getElementById('add_task');

  const deleteBtn = document.getElementById('delete_task_btn');
  const deleteDay = document.getElementById('delete_day');
  const chooseTask = document.getElementById('choose_task');
    
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
    DeleteDropDown();
    } 
    
    else {
      alert("Please add your task.");
    }

    add_task.value = '';
    });

    deleteBtn.addEventListener("click", function(event) {
      var contentToDelete = chooseTask.value;
      var dayToDeleteFrom = deleteDay.value;
      var listItems = document.getElementById(dayToDeleteFrom).getElementsByTagName('li');
      for (var i = 0; i < listItems.length; i++) {
          if (listItems[i].textContent === contentToDelete) {
              listItems[i].remove();
              break;
          }
      }
      DeleteDropdown();
  });

  function createCheckbox() {
      // function to create a checkbox
  }

  function DeleteDropdown() {
    chooseTask.innerHTML = ""; // clear existing options
    var dayToDeleteFrom = deleteDay.value;
    var listItems = document.getElementById(dayToDeleteFrom).getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        var option = document.createElement('option');
        option.value = listItems[i].textContent;
        option.textContent = listItems[i].textContent;
        chooseTask.appendChild(option);
    }
}

});