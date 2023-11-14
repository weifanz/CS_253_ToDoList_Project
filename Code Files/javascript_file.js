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
        } 
        
        add_task.value = '';
    });

})