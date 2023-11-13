function addToColumn(add_day, add_task) {
    var cellId = add_day.toLowerCase();
    var cell = document.getElementById(cellId);
    if (cell) {
        cell.textContent = add_task;
    }
}