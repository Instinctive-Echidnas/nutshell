const chat = require("./chat/chat.js");
const welcome = require("./login/welcome.js");
const TasksDomManager = require("./tasks/taskForm.js");
const APIObject = require("./dataManager");

console.log("Hello main.js");



tempObject  = {
    userName: false
}

sessionStorage.setItem("session", JSON.stringify(tempObject));

let login = JSON.parse(sessionStorage.getItem("session"));

if (login.userName) {
    console.log("Dashboard");
} else {
    console.log("Login");
}


if (login.userName) {
    console.log("Dashboard");
} else {
    console.log("Login: invoking welcome function inside of welcome module");
    welcome();
}

chat.createWindow();

//------------------------Tasks Section -------------------------------------------------------

document.querySelector("#taskForm").innerHTML = TasksDomManager.renderTaskModal();


document.querySelector("#taskSaveButton").addEventListener("click", () => {

    // when the save button is clicked, the values are stored in a variable that is sent to Local Storage.
    const newTask = {
        task: document.querySelector("#taskFormName").value,
        taskGoalDate: document.querySelector("#taskGoalDate").value,
        taskStatus: true
    }
//save to local storage
    APIObject.savetaskEntry(newTask).then(() =>{
        console.log(newTask);

        //this clears the form when the save button is clicked.
        TasksDomManager.clearForm();

        //this renders the task list to the DOM
        APIObject.getEntries().then(result => {
            console.log("The entries are found!", result)

        document.querySelector("#tasksList").innerHTML = ""

            result.forEach(task => {

        document.querySelector("#tasksList").innerHTML += TasksDomManager.renderTaskList(task);

    })

    })
})
})

//this lists the tasks after refreshing the page.
function listTasks() {
    //this clears the DOM and then pulls all tasks to the DOM
    document.querySelector("#tasksList").innerHTML = "";
    APIObject.getEntries().then(result => {
    result.forEach(task => {
        //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom) ultimately putting it to the dom.
        document.querySelector("#tasksList").innerHTML += TasksDomManager.renderTaskList(task);
    })

})
}
listTasks()

document.querySelector("#tasksList").addEventListener("click", (event) => {
    console.log(event);
    if(event.target.id.split("--")[0] === "taskCheckBox"){
        console.log("Hey!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
        
        APIObject.replaceEntry(id).then(()=> {
            listEntries()
        }) 

    }
        
})