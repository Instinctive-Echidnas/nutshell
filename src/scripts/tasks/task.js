console.log("task.js is connected");

/*
    Author: Helen Chalmers
    Name: tasks list
    Purpose: runs the tasks functions to create a task list once a create button is pressed.
*/


const TasksDomManager = require("./taskForm.js")
const APItasksContent = require("../dataManager")

//this needs to be wrapped inside of a function******
function startTask() {




document.querySelector("#taskForm").innerHTML = TasksDomManager.renderTaskModal();


document.querySelector("#taskSaveButton").addEventListener("click", () => {

    // when the save button is clicked, the values are stored in a variable that is sent to Local Storage.
    const newTask = {
        task: document.querySelector("#taskFormName").value,
        taskGoalDate: document.querySelector("#taskGoalDate").value,
        taskStatus: true
    }
    //save to local storage
    APItasksContent.savetaskEntry(newTask).then(() => {
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
    document.querySelector("#tasksList").innerHTML = "";
    APItasksContent.getEntries().then(result => {
        result.forEach(task => {
            //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom) ultimately putting it to the dom.
            document.querySelector("#tasksList").innerHTML += TasksDomManager.renderTask(task);
        })

    })
}
listTasks()

// function listCompletedTasks() {

//     document.querySelector("#completedTasks").innerHTML = "";
//     APItasksContent.getCompletedTasks().then(result => {
//     result.forEach(completedtask => {

//         document.querySelector("#completedTasks").innerHTML += renderTaskForm.renderCompletedTasks(completedtask);
//     })
// })   
// }
// listCompletedTasks();


document.querySelector("#tasksList").addEventListener("click", (event) => {
    console.log(event);
    if (event.target.id.split("--")[0] === "taskCheckBox") {
        console.log("Hey!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
        // let taskNameDOM = `#taskName--${id}`
        // console.log(taskNameDOM);

        let newobject = {
            task: document.querySelector(`#taskName--${id}`).value,
            taskGoalDate: document.querySelector(`#date--${id}`).value,
            taskStatus: false
        }
        console.log("this is a new object", newobject);

        APItasksContent.replaceEntry(newobject, id).then(() => {
            listTasks()
        })
        // listCompletedTasks();
    }




})


}

module.exports = startTask





