console.log("Hey Lady");

const renderTaskForm = require("./tasks/taskForm")
const APItasksContent = require("./dataManager")
const renderTaskList = require("./tasks/taskListDom")

const taskManager = Object.create(null, {


//Task form to HTML 
document.querySelector("#taskForm").innerHTML = renderTaskForm();

document.querySelector("#saveTaskButton").addEventListener("click", () => {

    //grabs value from the the form and stores it into a variable newTask
    const newTask = {

        title: document.querySelector("#taskFormInput").value,
        date: document.querySelector("#taskGoalDate").value,
    }

    //uses the save task function to save to the API and then
    APItasksContent.savetaskEntry(newEntry).then(() => {

        //clears the DOM
        document.querySelector(".tasks").innerHTML = "";

        //
        APItasksContent.getEntries().then(result => {
            result.forEach(entry => {

            document.querySelector("#tasksList").innerHTML += renderTaskList();
            })
        })

})

});




