"use strict"

function renderTaskList(task) {
    return `<div id="taskListWrapper">
            <h2 id="taskName--${task.id}">${task.name}</h2> 
            <input type="checkbox" name="task" value="taskcomplete">
        </div>`
    
}

module.export = renderTaskList