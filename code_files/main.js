/* FILE: main.js
* --------------
*/

document.addEventListener("DOMContentLoaded", function() {
// Buttons from html file
const task_btn = document.getElementById('add_task_btn');
const add_day = document.getElementById('add_day');
const add_task = document.getElementById('add_task');

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
        } else {
            alert("Please add your task.");
        }

        add_task.value = '';
    });

    // Function to handle checkbox state change
    function handleCheckboxChange(checkbox) {
        if (checkbox.checked) {
          
       
        } else {
          
         
        }
      }
  
      // Function to create a checkbox
      function createCheckbox() {
        // Get the container element
        var container = document.body;
  
        // Checkbox value
        var checked = false;
  
        // Create checkbox dynamically
        checked.forEach(function(value) {
          // Create a checkbox element
          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.value = false;
  
          // Set a unique ID for each checkbox
          checkbox.id = 'checkbox_' + content;
  
          // Create a label for the checkbox
          var label = document.createElement('label');
          label.appendChild(document.createTextNode(value));
          label.setAttribute('for', checkbox.id);
  
          // Add an event listener for the checkbox
          checkbox.addEventListener('change', function() {
            handleCheckboxChange(checkbox);
          });
  
          // Append the checkbox and label to the container
          container.appendChild(checkbox);
          container.appendChild(label);
          container.appendChild(document.createElement('br')); // Line break for better spacing
        });
      }
  
     
      

})