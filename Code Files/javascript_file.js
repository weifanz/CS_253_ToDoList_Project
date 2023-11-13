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
    if (add_day == 'sun_tasks') {
        const listTask = document.createElement('li');
        sun_tasks.appendChild(listTask);
        var content = document.getElementById(add_task).value;
        
    }
    else if (add_day == 'mon_tasks') {
        const listTask = document.createElement('li');
    }
    else if (add_day == 'tue_tasks') {
        const listTask = document.createElement('li');
    }
    else if (add_day == 'wed_tasks') {
        const listTask = document.createElement('li');
    }
    else if (add_day == 'thu_tasks') {
        const listTask = document.createElement('li');
    }
    else if (add_day == 'fri_tasks') {
        const listTask = document.createElement('li');
    }
    else if (add_day == 'sat_tasks') {
        const listTask = document.createElement('li');
    }
    else {

    }
});




function addToColumn(add_day, add_task) {
    var cellId = add_day.toLowerCase();
    var cell = document.getElementById(cellId);
    if (cell) {
        cell.textContent = add_task;
    }
}
