console.log("task.js is connected");

/*
    Author: Helen Chalmers
    Name: tasks list
    Purpose: runs the tasks functions to create a task list once a create button is pressed.
*/


const renderTaskForm = require("./tasks/taskForm")
const APItasksContent = require("./dataManager")




// const taskManager = Object.create(null, {


//         createTaskForm: {
//                 value: () => {
// //Task form to HTML 
//                         console.log("createForm")
//                         // document.querySelector("#taskForm").innerHTML = renderTaskForm();
//                 }

//         },

//         saveButtonClick: {
//             value: ()  => {
//                         console.log("saveButtonClick")
//     //                     document.querySelector("#saveTaskButton").addEventListener("click", () => {

//     // //grabs value from the the form and stores it into a variable newTask
//     //                 const newTask = {

//     //                             title: document.querySelector("#taskFormInput").value,
//     //                             date: document.querySelector("#taskGoalDate").value,
//     //                 }

//     // //uses the save task function to save to the API and then
//     //                 APItasksContent.savetaskEntry(newEntry).then(() => {

//     //     //clears the DOM
//     //                 document.querySelector(".tasks").innerHTML = "";

//     //     //
//     //                 APItasksContent.getEntries().then(result => {
//     //                     result.forEach(entry => {

//     //                 document.querySelector("#tasksList").innerHTML += renderTaskList();
//     //                     })
//     //                 })

//     //                 })

//     //                     });

//             }

//         }

// };
// // clearForm: {
//     //         value: () => {
//     //             document.querySelector("#journalTitleInput").value = "";
//     //             document.querySelector("#journalTextInput").value = "";
//     //         }
//     //     },
// module.exports = taskManager