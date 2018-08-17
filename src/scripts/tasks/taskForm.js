console.log("taskForm is Connected");

"use strict"


/*
    Author: Helen Chalmers
    Name: All Task Elements to Dom
    Purpose: creates all the DOM elements for the tasks section.
*/

//this is the function that render's tasks to DOM:
const TasksDomManager = Object.create(null, {


//task modal - when click on "new task" button then a form pops up with a field to enter the task and they can add a date.    
    renderTaskModal: {
        value: () => {

   return `<button type="button" class="btn btn-primary" id="newTaskButton" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Create Task</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group" id="taskForm">
                      <label for="recipient-name" class="col-form-label">Task:</label>
                      <input type="text" class="form-control" id="taskFormName">
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label">Goal Date: </label>
                      <input required type="date" id="taskGoalDate">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" id="taskSaveButton">Save</button>
                </div>
              </div>
            </div>
          </div>`
        }
    },

    //this clears the form in the modal.
    clearForm: {
        value: () => {
            document.querySelector("#taskFormName").value = ""
            document.querySelector("#taskGoalDate").value = ""
        }
    },



//this is the task list that will post to the DOM.
    renderTask: {
    
        value:  (task) => {

        return `<div class="task-card" id="taskID--${task.id}">
                    <h4 id="taskName--${task.id}">Task: <span id="taskNameSpan--${task.id}">${task.task}</span></h4> 
                    <h4 id="date--${task.id}">Target Date: <span id="dateSpan--${task.id}">${task.taskGoalDate}</span></h4>
                    <input type="checkbox" name="task" value="taskcomplete" id="taskCheckBox--${task.id}">
                    <button class="editButton" id="edit--${task.id}">Edit</button>
              </div>`
        
            }
    }, 

    renderCompletedTask: {
        value: (completedTask) => {

            return `<div id="completedtaskListWrapper">
            <div id="completedTaskId--${task.id}>
            <h2 id="comepletedtasksTitle">Completed Tasks</h2>
            <h4 id="taskName--${task.id}">${task.task}</h4> 
            <h4 id="date--${task.id}">Target Date: ${task.taskGoalDate}</h4>
            <input type="checkbox" name="task" value="taskcomplete" id="taskCheckBox--${task.id}">
            <button class="editButton" id="edit--${task.id}">Edit</button>
            </div>
        </div>`

        }


    }
})



module.exports = TasksDomManager;



// ------------------------------------Old Form ----------------------------------------------------------------------------------


// return `<div class="wrapper">
    //         <div class="task-form">
    //             <fieldset id="taskFormWrapper">
    //             <label for="taskForm" id="taskForm">Tasks:</label>
    //             <input required type="text" id="taskFormInput">
    //             </fieldset>
    //             <fieldset id="taskDateWrapper">
    //             <label for="taskDate" id="taskDate">Goal Date:</label>
    //             <input required type="date" id="taskGoalDate">
    //             </fieldset>
    // <button id="saveTaskButton">Save Task</button>
    //         </div>
    //         </div>`



// renderTaskForm();