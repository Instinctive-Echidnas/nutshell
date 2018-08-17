console.log("editedtask is connected")
/*
    Author: Helen Chalmers
    Name: Edited Task
    Purpose: this creates an edited task once the edit button is pressed.  
*/


function transformTask(event){
    //assigns the parent element a variable
    let parent = event.target.parentElement;

    //assigns the original task to a variable.  
    let taskTitle = document.querySelector(`#taskNameSpan--${event.target.id.split("--")[1]}`).textContent;

    //assigns the original date to a variable
    let taskDate = document.querySelector(`#dateSpan--${event.target.id.split("--")[1]}`).textContent;

    console.log(parent);
    //creates new form fields, autopopulating the original task and date in the input fields, so essentially you can edit and save.  
    parent.innerHTML = 
        `<input type="text" value="${taskTitle}" id="editedTaskTitle">
        <input type="date" value="${taskDate}" id="editedTaskDate">
        <button id="saveEditedTask--${event.target.id.split("--")[1]}">Save Edits!!</button>`
}



module.exports = transformTask;