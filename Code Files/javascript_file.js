/* FILE: main.js
* --------------
*/

// Buttons from html file
const task_btn = document.querySelector('Add_task_btn');
const select_btn = document.querySelector('select_day_btn');

task_btn.addEventListener('Click', () => {
    /*
    * task_btn.addEventListener is a function that listens for a click and runs the function
    * The function will take in the input and store it in the 
    */
});




function addToColumn(add_day, add_task) {
    var cellId = add_day.toLowerCase();
    var cell = document.getElementById(cellId);
    if (cell) {
        cell.textContent = add_task;
    }
}
