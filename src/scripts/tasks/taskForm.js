"use strict"

function renderTaskForm(){

    return `<div class="wrapper">
            <div class="task-form">
                <fieldset id="taskFormWrapper">
                <label for="taskForm" id="taskForm">Tasks:</label>
                <input required type="text" id="taskFormInput">
                </fieldset>
                <fieldset id="taskDateWrapper">
                <label for="taskDate" id="taskDate">Goal Date:</label>
                <input required type="date" id="taskGoalDate">
                </fieldset>
    <button id="saveTaskButton">Save Task</button>
            </div>
            </div>`

}

// renderTaskForm();

module.exports = renderTaskForm