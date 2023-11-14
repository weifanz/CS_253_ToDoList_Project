/* FILE: main.js
* --------------
*/

// Buttons from html file
const task_btn = document.querySelector('Add_task_btn');
const select_btn = document.querySelector('select_day_btn');

Add_task_btn.addEventListener('Click', () => {
    /*
    * task_btn.addEventListener is a function that listens for a click and runs the function
    * The function will take in the input and store it in the correct list
    */
    var day = document.getElementById(add_day).value;
    var content = document.getElementById(add_task).value; // Getting user input
    if (day.toLowerCase() == 'sunday') {
        const listTask = document.createElement('li'); 
        listTask.value = content;
        sunday.appendChild(listTask);
    }
    else if (add_day.toLowerCase() == 'monday') {
        const listTask = document.createElement('li');
    }
    else if (add_day.toLowerCase() == 'tuesday') {
        const listTask = document.createElement('li');
    }
    else if (add_day.toLowerCase() == 'wednesday') {
        const listTask = document.createElement('li');
    }
    else if (add_day.toLowerCase() == 'thursday') {
        const listTask = document.createElement('li');
    }
    else if (add_day.toLowerCase() == 'friday') {
        const listTask = document.createElement('li');
    }
    else if (add_day.toLowerCase() == 'saturday') {
        const listTask = document.createElement('li');
    }
    else {
        alert("Not a valid day of the week :(");
    }
});




function addToColumn(add_day, add_task) {
    var cellId = add_day.toLowerCase();
    var cell = document.getElementById(cellId);
    if (cell) {
        cell.textContent = add_task;
    }
}
