console.log("task.js is connected");

/*
    Author: Helen Chalmers
    Name: tasks list
    Purpose: runs the tasks functions to create a task list once a create button is pressed.
*/


const TasksDomManager = require("./taskForm.js");
const APItasksContent = require("../dataManager");
const transformTask = require("./editedtask");


function startTask() {

    //creates a div for the task modal to be places
   const listAllTasks = document.createElement("div");
   listAllTasks.setAttribute("id","taskListDiv");
   document.querySelector(".taskDiv").appendChild(listAllTasks);

//puts the modal to the DOM in the div created above
document.querySelector(".taskDiv").innerHTML += TasksDomManager.renderTaskModal();

//adds an event listener to the  save button and on click something happens. 
document.querySelector("#taskSaveButton").addEventListener("click", () => {
    // when the save button is clicked, the values are stored in a variable that saving the task to the userID session Storage.
    let sessionstorageuserID = JSON.parse(sessionStorage.getItem("session")).id;
    console.log(sessionstorageuserID);

    //stores the values in a variable.  
    const newTask = {
        userId: sessionstorageuserID,
        task: document.querySelector("#taskFormName").value,
        taskGoalDate: document.querySelector("#taskGoalDate").value,
        taskStatus: true
    }
    //save to database
    APItasksContent.saveTask(newTask).then(() => {
        console.log(newTask);

        //this clears the form when the save button is clicked.
        TasksDomManager.clearForm();

        //this renders the task list to the DOM
        listTasks()
    })
})


//this lists the tasks after refreshing the page.
function listTasks() {
    //this clears the DOM and then pulls all tasks to the DOM
    document.getElementById("taskListDiv").innerHTML = "";
    let sessionstorageuserID = JSON.parse(sessionStorage.getItem("session")).id
    APItasksContent.getTasks(sessionstorageuserID).then(result => {
        result.forEach(task => {
            //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom) ultimately putting it to the dom.
            document.getElementById("taskListDiv").innerHTML += TasksDomManager.renderTask(task);
        })

    })
}
listTasks()

//when the task box is clicked, gets user id from session storage, parses it and stores it in an object.  
document.querySelector(".taskDiv").addEventListener("click", (event) => {
    console.log(event);
    let sessionstorageuserID = JSON.parse(sessionStorage.getItem("session")).id;
    console.log(sessionstorageuserID);

//targets the task checkbox
    if (event.target.id.split("--")[0] === "taskCheckBox") {
        console.log("Hey!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
        // let taskNameDOM = `#taskName--${id}`
        // console.log(taskNameDOM);

        //assigns a task to false and stores it in an object.
        let newobject = {
            userId: sessionstorageuserID,
            task: document.querySelector(`#taskNameSpan--${id}`).textContent,
            taskGoalDate: document.querySelector(`#dateSpan--${id}`).textContent,
            taskStatus: false
        }
        console.log("this is a new object", newobject);

        //runs the newObject with value of false through the complete task function so that when the checkboax is checked, the task is assigned to false and no longer filters to the page.  
        APItasksContent.completeTask(newobject, id).then(() => {
            listTasks()
        })
        // listCompletedTasks();
    }

    //targets the edit button and runs the transform task function
    if (event.target.id.includes("edit")){
        //function that transforms task
        transformTask(event);
    }
    //targets the new save button on the edited task
    if (event.target.id.includes("saveEditedTask")) {
        console.log("i was clicked")
        let taskId = event.target.id.split("--")[1]
        
//grabs the new values of the edited tasks, assigns to true and stored in a variable.
        let editedTask = {
            userId: sessionstorageuserID,
            task: document.querySelector("#editedTaskTitle").value,
            taskGoalDate: document.querySelector("#editedTaskDate").value,
            taskStatus: true
        }

        console.log("taskId:", taskId, "task", editedTask)

        //calling the editTask function, passing through the editedTask and taskId and then listing the updated task list to the page.  
        APItasksContent.editTask(editedTask, taskId).then(()=>{
            listTasks()
        })
    }



})


}

module.exports = startTask





